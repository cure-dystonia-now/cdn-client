import React from "react";
import { StatefulComponent } from "../../../definitions/props/PageProps";
import { inject, observer } from "mobx-react";
import { Research } from "../../../definitions/types/Research";
import { Link } from "react-router-dom";

@inject("pageDependencies")
@observer
export class ResearchManagementSubView extends React.Component<StatefulComponent> {

  async componentDidMount() {
    const { dashboardController } = this.props.pageDependencies.controllerRegistry;
    await dashboardController.fetchResearch();
  }

  private getTableRow(research: Research) {
    return (
      <tr key={research.id}>
        <td>{research.id}</td>
        <td>{research.title}</td>
        <td>{research.author}</td>
        <td>{research.year}</td>
        <td>
          <Link className="btn btn-primary" to={`/dashboard/edit-research/${research.id}`}>Edit</Link>
        </td>
      </tr>
    )
  }

  render() {
    const { dashboardState } = this.props.pageDependencies.stateRegistry;
    return (
      <div>
        <h1 className="subview-heading">Research Management</h1>
        <Link style={{marginBottom: 30}} className="btn btn-success" to="/dashboard/edit-research">Create Research</Link>
        <div className="event-mgmt-table-wrapper">
          <table className="table">
            <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
              <th/>
            </tr>
            </thead>
            <tbody>
            { dashboardState.research.map(research => this.getTableRow(research) )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

}