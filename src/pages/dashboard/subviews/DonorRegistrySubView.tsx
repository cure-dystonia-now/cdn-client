import React from "react"
import { DonorRegistrySubViewProps } from "../../../definitions/props/PageProps";
import { inject, observer } from "mobx-react";
import { Donor } from "../../../definitions/types/Donor";
import { Link } from "react-router-dom";

@inject("pageDependencies")
@observer
export class DonorRegistrySubView extends React.Component<DonorRegistrySubViewProps> {

  async componentDidMount() {
    const { controllerRegistry } = this.props.pageDependencies;
    const { donorRegistryController } = controllerRegistry.dashboardController;
    await donorRegistryController.fetchBulk(this.props.match.params.page);
  }

  private getDonorTableRow(donor: Donor) {
    return (
      <tr key={donor.id}>
        <td>
          <Link to={`/dashboard/donor/${donor.id}`}>{donor.id}</Link>
        </td>
        <td>{donor.first_name} {donor.last_name}</td>
        <td>{donor.phone_number}</td>
        <td>{donor.email}</td>
      </tr>
    )
  }

  render(): React.ReactNode {
    const { dashboardState } = this.props.pageDependencies.stateRegistry;
    const { donorRegistryDonors } = dashboardState;
    return (
      <div id="donorRegistry">
        <div>
          <table className="table">
            <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Email</th>
            </tr>
            </thead>
            <tbody>
            { donorRegistryDonors.map(donor => this.getDonorTableRow(donor)) }
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}