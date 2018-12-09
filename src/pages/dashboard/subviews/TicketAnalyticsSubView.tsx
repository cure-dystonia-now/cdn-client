import React from "react";
import { TicketAnalyticSubViewProps } from "../../../definitions/props/PageProps";
import { inject, observer } from "mobx-react";
import { DonorPayment } from "../../../definitions/types/DonorPayment";
import { Link } from "react-router-dom";
import bind from "bind-decorator";
import moment from "moment";

@inject("pageDependencies")
@observer
export class TicketAnalyticsSubView extends React.Component<TicketAnalyticSubViewProps> {

  async componentDidMount() {
    const { controllerRegistry } = this.props.pageDependencies;
    const { ticketAnalyticsController } = controllerRegistry.dashboardController;
    await ticketAnalyticsController.fetchTicketSalesBulk(this.getPageNumber());
  }

  private getTableRow(payment: DonorPayment) {
    const { controllerRegistry } = this.props.pageDependencies;
    const { ticketAnalyticsController } = controllerRegistry.dashboardController;

    const donor = ticketAnalyticsController.getDonorFromTicketSales(payment.donor_id);
    if (!donor) return <tr/>;

    return (
      <tr key={payment.id}>
        <td>{payment.id}</td>
        <td>
          <Link to={`/dashboard/edit-event/${payment.event_id}`}>{payment.event_id}</Link>
        </td>
        <td>
          <Link to={`/dashboard/donor/${donor.id!}`}>
            {donor.first_name} {donor.last_name}
          </Link>
        </td>
        <td>${Number(payment.amount).toFixed(2)}</td>
        <td>{payment.ticket_quantity}</td>
        <td>{moment.parseZone(payment.created_at).format("MMM DD YYYY")}</td>
      </tr>
    )
  }

  @bind
  private async handlePageChangeForward() {
    await this.handlePageChange(this.getPageNumber() + 1);
  }

  @bind
  private async handlePageChangeBack() {
    await this.handlePageChange(this.getPageNumber() - 1);
  }

  private async handlePageChange(newPageNumber: number) {
    const { controllerRegistry } = this.props.pageDependencies;
    const { ticketAnalyticsController } = controllerRegistry.dashboardController;
    window.location.href = `/dashboard/ticket-analytics/${newPageNumber}`;
    await ticketAnalyticsController.fetchTicketSalesBulk(newPageNumber);
  }

  private getTableRows() {
    const { stateRegistry } = this.props.pageDependencies;
    const { dashboardState } = stateRegistry;
    return dashboardState.eventTicketSales.map(donorPayment => this.getTableRow(donorPayment));
  }

  private getPageNumber(): number {
    const page = this.props.match.params.page;
    return page ? Number(page) : 1;
  }

  render(): React.ReactNode {
    const { stateRegistry } = this.props.pageDependencies;
    const { dashboardState } = stateRegistry;
    const areMorePages = dashboardState.eventTicketSales.length >= 25;
    const pageNumber = this.getPageNumber();
    return (
      <div>
        <h1 style={{borderBottom: 0, marginBottom: 0}}>Event Ticket Sales</h1>
        <div id="ticketAnalyticsSubView">
          <table className="table">
            <thead>
            <tr>
              <th>Donation #</th>
              <th>Event #</th>
              <th>Donor</th>
              <th>Amount Spent</th>
              <th>Tickets</th>
              <th>Date Purchased</th>
            </tr>
            </thead>
            <tbody>
              { this.getTableRows() }
            </tbody>
          </table>
        </div>
        <div className="columns" style={{marginTop: 30}}>
          <div className="column col-mx-auto col-sm-6 col-3 btn-group btn-group-block">
            <button onClick={this.handlePageChangeBack} className="btn" disabled={pageNumber === 1}>
              <i className="icon icon-arrow-left"/>
            </button>
            <button disabled className="btn">{pageNumber || 1}</button>
            <button onClick={this.handlePageChangeForward} className="btn" disabled={!areMorePages}>
              <i className="icon icon-arrow-right"/>
            </button>
          </div>
        </div>
      </div>
    )
  }

}