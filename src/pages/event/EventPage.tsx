import React from "react";
import bind from "bind-decorator";
import { inject, observer } from "mobx-react";
import { EventPageProps } from "../../definitions/props/PageProps";
import { EventPaymentModal } from "../../components/modals/EventPaymentModal";

import { DateFormatHelper } from "../../utilities/helpers/DateFormatHelper";

@inject("pageDependencies")
@observer
export class EventPage extends React.Component<EventPageProps> {

  async componentDidMount() {
    const { eventController } = this.props.pageDependencies.controllerRegistry;
    await eventController.fetchEvent(this.props.match.params.id);
  }

  @bind
  private openPaymentModal() {
    const { eventState } = this.props.pageDependencies.stateRegistry;
    eventState.resetPurchaseFields();
    eventState.updatePaymentModalOpen(true);
  }

  @bind
  private closeSuccessToast() {
    const { eventState } = this.props.pageDependencies.stateRegistry;
    eventState.updatePurchaseSuccessful(false);
  }

  render(): React.ReactNode {
    const { eventState } = this.props.pageDependencies.stateRegistry;
    const { event, loading, purchaseSuccessful } = eventState;
    if (loading) return <div className="loading loading-lg"/>;
    if (!event) {
      return (
        <div>Event Not Found</div>
      )
    }
    return (
      <div id="eventPage">
        <div className="columns">
          <div className="column col-md-12 col-8">
            <div hidden={!purchaseSuccessful} className="pay-toast">
              <div className="toast toast-success">
                <button onClick={this.closeSuccessToast} className="btn btn-clear float-right"/>
                Your payment was successful, thank you! Check your email for a receipt.
              </div>
            </div>
            <div className="description-wrapper">
              <h1>{event.name}</h1>
              <hr/>
              <div dangerouslySetInnerHTML={{ __html: event.description }}/>
            </div>
          </div>
          <div className="column col-md-12 col-4">
            <div className="info-wrapper">
              {
                event.ticket_price &&
                  <button onClick={this.openPaymentModal} className="btn btn-primary btn-lg">Purchase Tickets ${event.ticket_price}</button>
              }
              <h3><i className="icon icon-time"/>&nbsp;&nbsp;Date</h3>
              <p>{DateFormatHelper.formatEvent(event.date)}</p>
              <br/>
              <h3><i className="icon icon-location"/>&nbsp;&nbsp;Location</h3>
              <p>{event.street_address},<br/>{event.city}, {event.state} {event.zipcode}</p>
            </div>
          </div>
        </div>
        <EventPaymentModal pageDependencies={this.props.pageDependencies}/>
      </div>
    )
  }

}