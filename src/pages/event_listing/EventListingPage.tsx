import React from "react";
import { inject, observer } from "mobx-react";

import { Event } from "../../definitions/types/Event";
import { EventListingPageProps } from "../../definitions/props/PageProps";
import { Link } from "react-router-dom";
import { DateFormatHelper } from "../../utilities/helpers/DateFormatHelper";

// @ts-ignore
import eventPanoramaImage from "../../assets/images/event-panorama.jpg";

@inject("pageDependencies")
@observer
export class EventListingPage extends React.Component<EventListingPageProps> {

  async componentDidMount() {
    const { eventListingState } = this.props.pageDependencies.stateRegistry;
    const { eventListingController } = this.props.pageDependencies.controllerRegistry;
    eventListingState.updatePage(this.props.match.params.page);
    await eventListingController.loadEvents();
  }

  private getEventCard(event: Event) {
    return (
      <div className="event-card" key={event.id}>
        <Link className="title" to={`/event/${event.id!}`}>
          {event.name}
        </Link>
        <br/>
        <span>{DateFormatHelper.formatEvent(event.date)}</span>
        <br/>
        <span>{event.city}, {event.state}</span>
      </div>
    )
  }

  render() {
    const { page } = this.props.match.params;
    const { eventListingState } = this.props.pageDependencies.stateRegistry;
    if (eventListingState.loading) return <div/>;
    return (
      <div id="eventListingPage">
        <div className="columns">
          <div className="column col-5 col-md-12">
            <div className="info-col">
              <h1>Our Events</h1>
              <p>We host events to provide funding for our research. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae gravida sem. Nam ac iaculis odio. Praesent eget facilisis mauris, vel finibus velit. Praesent augue nisl, porta tincidunt mauris quis, congue condimentum arcu. Vestibulum ipsum magna, sagittis faucibus diam vel, vestibulum dapibus tellus. Nulla facilisi. Phasellus urna neque, tempus vel eleifend eget, rhoncus a metus. Duis porta rhoncus pharetra. Ut id lorem urna. Donec imperdiet elit rutrum orci iaculis, et convallis ligula volutpat. Nunc convallis sem ac consectetur accumsan. Etiam vestibulum sed enim in sagittis. Fusce non velit sed massa ultrices luctus. </p>
              <p>We host events to provide funding for our research. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae gravida sem. Nam ac iaculis odio. Praesent eget facilisis mauris, vel finibus velit. Praesent augue nisl, porta tincidunt mauris quis, congue condimentum arcu. Vestibulum ipsum magna, sagittis faucibus diam vel, vestibulum dapibus tellus. Nulla facilisi. Phasellus urna neque, tempus vel eleifend eget, rhoncus a metus. Duis porta rhoncus pharetra. Ut id lorem urna. Donec imperdiet elit rutrum orci iaculis, et convallis ligula volutpat. Nunc convallis sem ac consectetur accumsan. Etiam vestibulum sed enim in sagittis. Fusce non velit sed massa ultrices luctus. </p>
            </div>
          </div>
          <div className="column col-7 col-md-12">
            <div className="image-wrapper">
              <img className="img-responsive" alt="Event Panorama" src={eventPanoramaImage}/>
            </div>
            <div className="event-col">
              { eventListingState.events.map(event => this.getEventCard(event)) }
            </div>
          </div>
        </div>
        <div style={{marginTop: 80}} className="column col-2 col-sm-5 col-mx-auto">
          <div className="btn-group btn-group-block">
            <Link className="btn" to={`/events/${Number(page) > 2 ? Number(page) - 1 : "" }`}>
              <i className="icon icon-arrow-left"/>
            </Link>
            <button className="btn">{page || "1"}</button>
            <Link className="btn" to={`/events/${page ? Number(page) + 1 : 2 }`}>
              <i className="icon icon-arrow-right"/>
            </Link>
          </div>
        </div>

      </div>
    )
  }

}