import React from "react";
import bind from "bind-decorator";
import { PageDependencies } from "../../definitions/dependencies/PageDependencies";
import { CardElement, ReactStripeElements, injectStripe } from "react-stripe-elements";
import { observer } from "mobx-react";
import InjectedStripeProps = ReactStripeElements.InjectedStripeProps;

type PaymentModalProps = {
  open: boolean,
  closeCallback: Function,
  pageDependencies: PageDependencies
}

@observer
class EventPaymentModalRaw extends React.Component<PaymentModalProps & InjectedStripeProps> {

  @bind
  private onCloseClick() {
    this.props.closeCallback();
  }

  @bind
  private updateTicketQuantity(event: React.ChangeEvent<HTMLInputElement>) {
    const { stateRegistry } = this.props.pageDependencies;
    const { eventState } = stateRegistry;
    const { value } = event.target;
    eventState.updateTicketQuantity(value ? parseInt(value) : 0);
  }

  @bind
  private updateField(field: string, event: React.ChangeEvent<HTMLInputElement>) {
    const { stateRegistry } = this.props.pageDependencies;
    const { eventState } = stateRegistry;
    if (field === "state" && event.target.value.length > 2) return;
    if (field === "zipcode" && event.target.value.length > 5) return;
    eventState.updatePurchaseField(field, event.target.value);
  }

  @bind
  private getFieldClass(field: string): string {
    const { stateRegistry } = this.props.pageDependencies;
    const { eventState } = stateRegistry;
    return eventState.purchaseInvalidFields.indexOf(field) > -1 ? "form-input is-error" : "form-input";
  }

  @bind
  private async handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { controllerRegistry} = this.props.pageDependencies;
    const { eventController } = controllerRegistry;
    console.log(this.props.stripe);
    await eventController.submitPayment(this.props.stripe!);
  }


  render(): React.ReactNode {
    const { stateRegistry} = this.props.pageDependencies;
    const { eventState } = stateRegistry;
    const { purchaseFields } = eventState;
    const subTotal = eventState.ticketQuantity * eventState.event!.ticket_price!;
    return (
      <div id="eventPaymentModal" className={eventState.paymentModalOpen ? "modal modal-lg active" : "modal modal-lg"}>
        <div className="modal-overlay" onClick={this.onCloseClick}/>
        <div className="modal-container" style={{padding: 30}}>
          <div className="modal-header">
            <button onClick={this.onCloseClick} className="btn btn-clear float-right close-button" aria-label="Close"/>
            <h5>Purchase Tickets</h5>
          </div>
          <div className="modal-body">
            <div className="content">
              <h4>Purchaser Information</h4>
              <div className="columns">
                <div className="column col-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input className={this.getFieldClass("first_name")} type="text" onChange={this.updateField.bind(this, "first_name")}
                      value={purchaseFields.first_name || ""} tabIndex={1}/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input className={this.getFieldClass("email")} type="text" onChange={this.updateField.bind(this, "email")}
                           value={purchaseFields.email || ""} tabIndex={3}/>
                  </div>
                </div>
                <div className="column col-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input className={this.getFieldClass("last_name")} type="text" onChange={this.updateField.bind(this, "last_name")}
                           value={purchaseFields.last_name || ""} tabIndex={2}/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input className={this.getFieldClass("phone_number")} type="text" onChange={this.updateField.bind(this, "phone_number")}
                           value={purchaseFields.phone_number || ""} tabIndex={4}/>
                  </div>
                </div>
              </div>
              <div className="divider"/>
              <div className="columns">
                <div className="column col-auto col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Street Address</label>
                    <input className={this.getFieldClass("street_address")} type="text" onChange={this.updateField.bind(this, "street_address")}
                           value={purchaseFields.street_address || ""} tabIndex={5}/>
                  </div>
                </div>
                <div className="column col-auto col-sm-12">
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <input className={this.getFieldClass("city")} type="text" onChange={this.updateField.bind(this, "city")}
                           value={purchaseFields.city || ""} tabIndex={6}/>
                  </div>
                </div>
                <div className="column col-1 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">State</label>
                    <input className={this.getFieldClass("state")} type="text" onChange={this.updateField.bind(this, "state")}
                           value={purchaseFields.state || ""} tabIndex={7}/>
                  </div>
                </div>
                <div className="column col-2 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Zipcode</label>
                    <input className={this.getFieldClass("zipcode")} type="text" onChange={this.updateField.bind(this, "zipcode")}
                           value={purchaseFields.zipcode || ""} tabIndex={8}/>
                  </div>
                </div>
              </div>
              <div className="divider"/>
              <h4>Payment Details</h4>
              <div className="columns">
                <div className="column col-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Ticket Price</label>
                    <div className="input-group">
                      <span className="input-group-addon">$</span>
                      <input className="form-input" disabled type="text" value={eventState.event!.ticket_price!}/>
                    </div>
                  </div>
                </div>
                <div className="column col-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Quantity</label>
                    <input className="form-input" type="text" onChange={this.updateTicketQuantity} defaultValue="1"/>
                  </div>
                </div>
              </div>
              <div className="payment-wrapper">
                <form onSubmit={this.handleSubmit}>
                  <CardElement className="payment"/>
                  <button style={{marginTop: 30}} disabled={subTotal === 0} className="btn btn-primary">{subTotal > 0 ? `Purchase $${subTotal}` : "Quantity Needed"}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export const EventPaymentModal = injectStripe(EventPaymentModalRaw);