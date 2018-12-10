import React from "react";
import { DonorSubViewProps } from "../../../definitions/props/PageProps";
import { inject, observer } from "mobx-react";
import { Donor } from "../../../definitions/types/Donor";
import { DonorPayment } from "../../../definitions/types/DonorPayment";
import * as moment from "moment";
import { Link } from "react-router-dom";

@inject("pageDependencies")
@observer
export class DonorSubView extends React.Component<DonorSubViewProps> {

  async componentDidMount() {
    const { controllerRegistry } = this.props.pageDependencies;
    const { dashboardController } = controllerRegistry;
    await dashboardController.fetchDonorInfo(this.props.match.params.donorId)
  }

  private getDonorInitials(donor: Donor): string {
    return `${donor.first_name.substr(0, 1)}${donor.last_name.substr(0, 1)}`;
  }

  private getDonorHistoryRow(donorPayment: DonorPayment) {
    return (
      <tr key={donorPayment.id}>
        <td>{donorPayment.id}</td>
        <td>${Number(donorPayment.amount).toFixed(2)}</td>
        <td>{moment.parseZone(donorPayment.created_at).format("MMM DD YYYY")}</td>
        <td>
          { donorPayment.event_id ? <Link to={`/dashboard/edit-event/${donorPayment.event_id}`}>{donorPayment.event_id}</Link> : "" }
        </td>
      </tr>
    )
  }

  private getPaymentHistoryTable(donorPayments: Array<DonorPayment>) {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Donation #</th>
            <th>Amount</th>
            <th>Timestamp</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
        { donorPayments.map(donorPayment => this.getDonorHistoryRow(donorPayment)) }
        </tbody>
      </table>
    )
  }

  render(): React.ReactNode {
    const { stateRegistry } = this.props.pageDependencies;
    const { donor, donorPaymentHistory } = stateRegistry.dashboardState;
    if (!donor || !donorPaymentHistory) return <div/>;
    return (
      <div id="donorSubView">
        <div className="donor-card">
          <div className="columns">
            <div className="column col-2">
              <figure className="avatar" data-initial={this.getDonorInitials(donor)}/>
            </div>
            <div className="columns column col-10">
              <div className="column col-5 col-sm-11">
                <h4>{donor.first_name} {donor.last_name}</h4>
                <h4>{donor.email}</h4>
                <h4>{donor.phone_number}</h4>
              </div>
                <div className="divider-vert"/>
              <div className="column col-5 col-sm-12">
                <h4>{donor.street_address}, {donor.city}</h4>
                <h4>{donor.state} {donor.zipcode}</h4>
              </div>
            </div>
          </div>
          <h3>Donation History</h3>
          { this.getPaymentHistoryTable(donorPaymentHistory) }
        </div>
      </div>
    )
  }

}