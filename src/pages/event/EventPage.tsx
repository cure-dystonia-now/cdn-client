import * as React from "react";
import { EventPageProps } from "../../definitions/props/PageProps";
import { inject, observer } from "mobx-react";
import ReactMarkdown from "react-markdown";

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
      <div id="eventPage" className="container">
        <div className="columns">
          <div className="column col-sm-12 col-8">
            <div className="description-wrapper">
              <h1>{event.name}</h1>
              <hr/>
              <ReactMarkdown source={event.description}/>
            </div>
          </div>
          <div className="column col-sm-12 col-4">
          </div>
        </div>
      </div>
    )
  }

}