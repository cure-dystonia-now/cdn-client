import { BaseController } from "./BaseController";
import { ReactStripeElements } from "react-stripe-elements";
import StripeProps = ReactStripeElements.StripeProps;
import TokenOptions = stripe.TokenOptions;

export class DonateController extends BaseController {

  private getStripeTokenOptionsFromForm(): TokenOptions {
    const { donateState } = this.stateRegistry;
    const { formFields } = donateState;
    return {
      name: `${formFields.first_name!} ${formFields.last_name!}`,
      address_line1: formFields.street_address!,
      address_city: formFields.city!,
      address_state: formFields.state!,
      address_zip: formFields.zipcode!
    }
  }

  public async submitDonation(stripe: StripeProps): Promise<void> {
    const { donateState } = this.stateRegistry;
    const { purchaseService } = this.serviceRegistry;
    donateState.validateFields();
    if (donateState.invalidFields.length > 0) return;

    try {
      this.getStripeTokenOptionsFromForm();
      const stripeResponse = await stripe.createToken(this.getStripeTokenOptionsFromForm());
      if (stripeResponse.error) {
        donateState.updateError(stripeResponse.error.message);
        return;
      }
      if (!stripeResponse.token) {
        donateState.updateError("Payment Gateway Error");
        return;
      }
      await purchaseService.submitDonation(stripeResponse.token.id, donateState.formFields);
    }
    catch (error) {
      donateState.updateError(error.message || "Payment Gateway Error");
    }
    finally {
      donateState.updateSubmitting(false);
    }
    this.getStripeTokenOptionsFromForm();
    void (stripe);
  }

}
