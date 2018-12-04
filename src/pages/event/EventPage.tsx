import * as React from "react";
import { EventPageProps } from "../../definitions/props/PageProps";
import { inject, observer } from "mobx-react";
import { DateFormatHelper } from "../../utilities/helpers/DateFormatHelper";

@inject("pageDependencies")
@observer
export class EventPage extends React.Component<EventPageProps> {

  async componentDidMount() {
    const { eventController } = this.props.pageDependencies.controllerRegistry;
    await eventController.fetchEvent(this.props.match.params.id);
  }

  render(): React.ReactNode {
    const { eventState } = this.props.pageDependencies.stateRegistry;
    const { event, loading } = eventState;
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
            <div className="description-wrapper">
              <h1>{event.name}</h1>
              <hr/>
              <div dangerouslySetInnerHTML={{ __html: event.description }}/>
            </div>
          </div>
          <div className="column col-md-12 col-4">
            <div className="info-wrapper">
              <button className="btn btn-primary btn-lg">Purchase Tickets</button>
              <h3>Date</h3>
              <p>{DateFormatHelper.formatEvent(event.date)}</p>
              <br/>
              <h3>Location</h3>
              <p>{event.street_address},<br/>{event.city}, {event.state} {event.zipcode}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

}