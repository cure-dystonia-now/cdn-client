import React from "react";
import { PagePropsGeneric } from "../../definitions/props/PageProps";
import bind from "bind-decorator";
import { inject, observer } from "mobx-react";
import { CardElement, injectStripe, ReactStripeElements } from "react-stripe-elements";
import InjectedStripeProps = ReactStripeElements.InjectedStripeProps;

@inject("pageDependencies")
@observer
class DonatePageRaw extends React.Component<PagePropsGeneric & InjectedStripeProps> {

  @bind
  private getFieldClass(field: string): string {
    const { stateRegistry } = this.props.pageDependencies;
    const { invalidFields } = stateRegistry.donateState;
    return `form-input ${invalidFields.indexOf(field) > -1 && "is-error"}`;
  }

  @bind
  private updateField(field: string, event: React.ChangeEvent<HTMLInputElement>) {
    const { stateRegistry } = this.props.pageDependencies;
    stateRegistry.donateState.updateField(field, event.target.value);
  }

  @bind
  private async handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { controllerRegistry} = this.props.pageDependencies;
    const { donateController } = controllerRegistry;
    await donateController.submitDonation(this.props.stripe!);
  }

  @bind
  private async clearError() {
    const { stateRegistry } = this.props.pageDependencies;
    stateRegistry.donateState.updateError(undefined);
  }

  render(): React.ReactNode {
    const { stateRegistry } = this.props.pageDependencies;
    const { formFields, submitting, error } = stateRegistry.donateState;
    return (
      <div id="donatePage">
        <div className="columns">
          <div className="column col-8 col-md-12">
            {
              error &&
              <div className="toast toast-primary">
                <button className="btn btn-clear float-right" onClick={this.clearError}/>
                {error}
              </div>
            }
            <div className="card card-left">
              <h4>Donor Information</h4>
              <div className="columns">
                <div className="column col-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input className={this.getFieldClass("first_name")} type="text" onChange={this.updateField.bind(this, "first_name")}
                           value={formFields.first_name || ""} tabIndex={1}/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input className={this.getFieldClass("email")} type="text" onChange={this.updateField.bind(this, "email")}
                           value={formFields.email || ""} tabIndex={3}/>
                  </div>
                </div>
                <div className="column col-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input className={this.getFieldClass("last_name")} type="text" onChange={this.updateField.bind(this, "last_name")}
                           value={formFields.last_name || ""} tabIndex={2}/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input className={this.getFieldClass("phone_number")} type="text" onChange={this.updateField.bind(this, "phone_number")}
                           value={formFields.phone_number || ""} tabIndex={4}/>
                  </div>
                </div>
              </div>
              <div className="divider"/>
              <div className="columns">
                <div className="column col-auto col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Street Address</label>
                    <input className={this.getFieldClass("street_address")} type="text" onChange={this.updateField.bind(this, "street_address")}
                           value={formFields.street_address || ""} tabIndex={5}/>
                  </div>
                </div>
                <div className="column col-auto col-sm-12">
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <input className={this.getFieldClass("city")} type="text" onChange={this.updateField.bind(this, "city")}
                           value={formFields.city || ""} tabIndex={6}/>
                  </div>
                </div>
                <div className="column col-1 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">State</label>
                    <input className={this.getFieldClass("state")} type="text" onChange={this.updateField.bind(this, "state")}
                           value={formFields.state || ""} tabIndex={7}/>
                  </div>
                </div>
                <div className="column col-2 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Zipcode</label>
                    <input className={this.getFieldClass("zipcode")} type="text" onChange={this.updateField.bind(this, "zipcode")}
                           value={formFields.zipcode || ""} tabIndex={8}/>
                  </div>
                </div>
              </div>
              <div className="divider"/>
              <h4>Payment Information</h4>
              <div className="columns">
                <div className="column col-md-12 col-8">
                  <div className="form-group">
                    <label className="form-label">Donation Amount</label>
                    <div className="input-group">
                      <span className="input-group-addon">$</span>
                      <input className={this.getFieldClass("amount")} type="text" onChange={this.updateField.bind(this, "amount")}
                             value={formFields.amount || ""} tabIndex={9}/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="payment-wrapper">
                <form onSubmit={this.handleSubmit}>
                  <CardElement className="payment" hidePostalCode/>
                  <button style={{marginTop: 30}} className={`btn btn-primary ${submitting && "loading"}`}>Donate</button>
                </form>
              </div>
            </div>
          </div>
          <div className="column col-4 col-md-12">
            <div className="card">
              <h1>Donations</h1>
              <p>
                We ask that you help out any way you can to help us in our fight. Any donation, large or small, is appreciated.
                By teaming up with some of the brightest and most motivated doctors and scientists, our goal is to help discover new and improved treatments and ultimately a cure.
              </p>
              <p>Cure Dystonia Now is a <b>501(c)(3)</b> organization; donations are tax deductible as allowable by law.</p>
              <p>
                We accept donations online by credit card (see below).
                Your transaction will be processed on a secure server to protect your personal information.
                If you would prefer to make a donation by check, please make checks payable to “Cure Dystonia Now”, and send all donations to Cure Dystonia Now, 201 Old Country Road, Suite 205, Melville, NY 11747.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export const DonatePage = injectStripe(DonatePageRaw);