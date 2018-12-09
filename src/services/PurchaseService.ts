import { ControllerService } from "./generic/ControllerService";
import { Donor } from "../definitions/types/Donor";

export class PurchaseService extends ControllerService {

  private getStripeTicketPayload(stripeToken: string, donor: Donor, eventId: number, quantity: number) {
    return {
      stripe_token: stripeToken,
      event_id: eventId,
      quantity: quantity,
      first_name: donor.first_name,
      last_name: donor.last_name,
      email: donor.email,
      phone_number: donor.phone_number,
      street_address: donor.street_address,
      city: donor.city,
      state: donor.state,
      zipcode: donor.zipcode
    }
  }

  public async purchaseEventTicket(stripeToken: any, donor: Donor, eventId: number, quantity: number): Promise<void> {
    const url = `${this.getBackendUrl()}/purchases/event-ticket/stripe`;
    const payload = this.getStripeTicketPayload(stripeToken, donor, eventId, quantity);
    const response = await this.post(url, payload);
    if (!response.success) throw Error(response.error || "Could not purchase tickets to event");
  }

  public async submitDonation(stripeToken: any, formData: any): Promise<void> {
    const url = `${this.getBackendUrl()}/purchases/donate/stripe`;
    const payload = { ...formData, stripe_token: stripeToken };
    const response = await this.post(url, payload);
    if (!response.success) throw Error(response.error || "Could not complete donation");
  }

  public async getEventTicketSalesBulk(start: number, count: number, eventId?: number): Promise<any> {
    const url = `${this.getBackendUrl()}/purchases/get-bulk/events`;
    const payload = { start, count, event_id: eventId };
    const response = await this.get(url, { params: payload, withCredentials: true });
    if (!response.success) throw Error(response.error || "Could not retrieve event ticket sales");
    return response;
  }

  public async getDonationsBulk(start: number, count: number): Promise<any> {
    const url = `${this.getBackendUrl()}/purchases/get-bulk/donations`;
    const payload = { start, count };
    const response = await this.get(url, { params: payload, withCredentials: true });
    if (!response.success) throw Error(response.error || "Could not retrieve event ticket sales");
    return response;
  }

}