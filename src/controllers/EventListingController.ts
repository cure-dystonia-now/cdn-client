import { BaseController } from "./BaseController";

export class EventListingController extends BaseController {

  public async loadEvents(): Promise<void> {
    const { eventListingState } = this.stateRegistry;
    const { eventsService } = this.serviceRegistry;
    const { eventsPerPage } = this.appConfig.eventListing;
    const startIndex = eventsPerPage * (eventListingState.page! - 1);
    const events = await eventsService.fetchEventsBulk(startIndex, eventsPerPage);
    console.log(events);
  }

}