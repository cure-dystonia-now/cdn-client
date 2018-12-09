import { BaseController } from "../../BaseController";
import { Donor } from "../../../definitions/types/Donor";

/* TODO: Move to Config */
const TICKETS_PER_PAGE = 25;

export class TicketAnalyticsController extends BaseController {

  public async fetchTicketSalesBulk(pageNumber: number, eventId?: string) {
    const { purchaseService } = this.serviceRegistry;
    const { dashboardState } = this.stateRegistry;
    try {
      const start = TICKETS_PER_PAGE * pageNumber;
      const result = await purchaseService.getEventTicketSalesBulk(start, TICKETS_PER_PAGE, eventId ? Number(eventId) : undefined);
      dashboardState.updateEventTicketSales(result.ticket_sales);
      dashboardState.updateTicketDonors(result.donors);
    }
    catch (e) {
      /* TODO: Show error toast */
    }
  }

  public async fetchEventNames(): Promise<void> {
    const { eventsService } = this.serviceRegistry;
    const { dashboardState } = this.stateRegistry;
    try {
      const eventNames = await eventsService.fetchEventNames();
      dashboardState.updateEventNames(eventNames);
    }
    catch (e) {
      /* TODO: Show error toast */
    }
  }

  /* TODO Move to state */
  public getDonorFromTicketSales(donorId: number): Donor | null {
    const { dashboardState } = this.stateRegistry;

    for (let i = 0; i < dashboardState.eventTicketDonors.length; i++) {
      const donor = dashboardState.eventTicketDonors[i];
      if (donor.id === donorId) return donor;
    }

    return null;
  }


}