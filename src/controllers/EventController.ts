import axios from "axios";
import bind from "bind-decorator";

import { ReactStripeElements } from "react-stripe-elements";
import StripeProps = ReactStripeElements.StripeProps;
import TokenOptions = stripe.TokenOptions;

import { BaseController } from "./BaseController";

export class EventController extends BaseController {

  public async fetchEvent(eventId: number): Promise<void> {
    const { eventState } = this.stateRegistry;
    eventState.updateLoading(true);

    try {
      const url = this.getBackendUrl() + "/events/get";
      const params = { id : eventId };
      const response = await axios.get(url, { params });
      if (response.data.success) {
        eventState.updateEvent(response.data.event);
      }
    }
    catch (error) {
      console.error(error);
    }
    finally {
      eventState.updateLoading(false);
    }

  }

  private getStripeTokenOptionsFromPurchaseForm(): TokenOptions {
    const { eventState } = this.stateRegistry;
    const { purchaseFields } = eventState;
    return {
      name: `${purchaseFields.first_name!} ${purchaseFields.last_name!}`,
      address_line1: purchaseFields.street_address!,
      address_city: purchaseFields.city!,
      address_state: purchaseFields.state!,
      address_zip: purchaseFields.zipcode!
    }
  }

  @bind
  public async submitPayment(stripe: StripeProps): Promise<void> {
    const { eventState } = this.stateRegistry;
    const { purchaseService } = this.serviceRegistry;
    eventState.validateFields();
    if (eventState.purchaseInvalidFields.length > 0) return;
    try {
      eventState.updatePurchaseLoading(true);
      const stripeResponse = await stripe.createToken(this.getStripeTokenOptionsFromPurchaseForm());
      if (stripeResponse.error) {
        eventState.updatePurchaseError(stripeResponse.error.message);
        return;
      }
      if (!stripeResponse.token) {
        eventState.updatePurchaseError("Payment Gateway Error");
        return;
      }
      await purchaseService.purchaseEventTicket(stripeResponse.token.id, eventState.purchaseFields, eventState.event!.id, eventState.ticketQuantity);
    }
    catch (error) {
      eventState.updatePurchaseError(error.message || "Payment Gateway Error");
    }
    finally {
      eventState.updatePurchaseLoading(false);
    }
  }

}