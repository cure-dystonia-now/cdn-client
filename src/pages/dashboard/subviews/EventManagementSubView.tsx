import * as React from "react";
import { StatefulComponent } from "../../../definitions/props/PageProps";
import { inject, observer } from "mobx-react";
import { Event } from "../../../definitions/types/Event";
import { DateFormatHelper } from "../../../utilities/helpers/DateFormatHelper";
import bind from "bind-decorator";
import { Link } from "react-router-dom";

@inject("pageDependencies")
@observer
export class EventManagementSubView extends React.Component<StatefulComponent> {

  async componentDidMount() {
    const { controllerRegistry } = this.props.pageDependencies;
    const { dashboardController } = controllerRegistry;
    await dashboardController.fetchEvents();
  }

  @bind
  private getTableRow(event: Event) {
    return (
      <tr className="active" key={event.id}>
        <td>{event.id}</td>
        <td>{event.name}</td>
        <td>{DateFormatHelper.formatEvent(event.date)}</td>
        <td>{DateFormatHelper.formatEvent(event.created_at!)}</td>
        <td>
          <Link to={`/dashboard/edit-event/${event.id}`} className="btn">Edit</Link>
        </td>
      </tr>
    )
  }

  render(): React.ReactNode {
    const { stateRegistry } = this.props.pageDependencies;
    const { dashboardState } = stateRegistry;
    return (
      <div>
        <div className="columns">
          <div className="column">
            <h2 style={{marginTop: 0}}>Event Management</h2>
          </div>
          <div className="column">
            <Link style={{alignSelf: "end"}} className="btn btn-success" to="/dashboard/edit-event">Create Event</Link>
          </div>
        </div>
        <table className="table">
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Created</th>
            <th/>
          </tr>
          </thead>
          <tbody>
          { dashboardState.events.map(event => this.getTableRow(event)) }
          </tbody>
        </table>
      </div>
    )
  }

}