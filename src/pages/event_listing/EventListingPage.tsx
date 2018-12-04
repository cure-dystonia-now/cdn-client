import React from "react";
import { inject, observer } from "mobx-react";

import { EventListingPageProps } from "../../definitions/props/PageProps";

@inject("pageDependencies")
@observer
export class EventListingPage extends React.Component<EventListingPageProps> {

  async componentDidMount() {
    const { eventListingState } = this.props.pageDependencies.stateRegistry;
    const { eventListingController } = this.props.pageDependencies.controllerRegistry;
    eventListingState.updatePage(this.props.match.params.page);
    await eventListingController.loadEvents();
  }

  render() {
    const { eventListingState } = this.props.pageDependencies.stateRegistry;
    return (
      <div>Event Listing Page {eventListingState.page}</div>
    )
  }

}