import bind from "bind-decorator";
import { action, observable } from "mobx";
import { Event } from "../../definitions/types/Event";

const requiredPurchaseFields = ["first_name", "last_name", "email", "phone_number", "street_address", "city", "state", "zipcode"];

export class EventState {

  @observable
  public event?: Event;

  @observable
  public loading: boolean;

  @observable
  public paymentModalOpen: boolean;

  @observable
  public ticketQuantity: number;

  @observable
  public purchaseFields: any;

  @observable
  public purchaseInvalidFields: Array<string>;

  constructor() {
    this.loading = false;
    this.paymentModalOpen = true;
    this.ticketQuantity = 1;
    this.purchaseFields = {};
    this.purchaseInvalidFields = [];
  }

  @bind
  @action
  public updateEvent(event: Event) {
    this.event = event;
  }

  @bind
  @action
  public updateLoading(loading: boolean) {
    this.loading = loading;
  }

  @bind
  @action
  public updatePaymentModalOpen(open: boolean) {
    this.paymentModalOpen = open;
  }

  @bind
  @action
  public updateTicketQuantity(quantity: number) {
    this.ticketQuantity = quantity;
  }

  @bind
  @action
  public updatePurchaseField(field: string, value: string) {
    this.purchaseFields[field] = value;
  }

  @bind
  @action
  public validateFields(): void {
    this.purchaseInvalidFields = [];
    for (let i = 0; i < requiredPurchaseFields.length; i++) {
      const field = requiredPurchaseFields[i];
      if (!this.purchaseFields.hasOwnProperty(field) || this.purchaseFields[field].length === 0) {
        this.purchaseInvalidFields.push(field);
      }
    }
  }


}