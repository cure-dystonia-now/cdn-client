import { BaseController } from "../../BaseController";
import { Donor } from "../../../definitions/types/Donor";

/* TODO: Move to Config */
const TICKETS_PER_PAGE = 25;

export class TicketAnalyticsController extends BaseController {

  public async fetchTicketSalesBulk(pageNumber: number) {
    const { purchaseService } = this.serviceRegistry;
    const { dashboardState } = this.stateRegistry;
    try {
      const start = TICKETS_PER_PAGE * (pageNumber - 1);
      const result = await purchaseService.getEventTicketSalesBulk(start, TICKETS_PER_PAGE);
      dashboardState.updateEventTicketSales(result.ticket_sales);
      dashboardState.updateTicketDonors(result.donors);
    }
    catch (e) {
      /* TODO: Show error toast */
    }
  }

  public getDonorFromTicketSales(donorId: number): Donor | null {
    const { dashboardState } = this.stateRegistry;

    for (let i = 0; i < dashboardState.eventTicketDonors.length; i++) {
      const donor = dashboardState.eventTicketDonors[i];
      if (donor.id === donorId) return donor;
    }

    return null;
  }


}