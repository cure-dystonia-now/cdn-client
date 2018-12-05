import { BaseController } from "./BaseController";

export class EventListingController extends BaseController {

  public async loadEvents(): Promise<void> {
    const { eventListingState } = this.stateRegistry;
    const { eventsService } = this.serviceRegistry;
    const { eventsPerPage } = this.appConfig.eventListing;
    const startIndex = eventsPerPage * (eventListingState.page! - 1);
    try {
      eventListingState.updateLoading(true);
      const events = await eventsService.fetchEventsBulk(startIndex, eventsPerPage);
      eventListingState.updateEvents(events);
    }
    catch (error) {
      console.error(error);
    }
    finally {
      eventListingState.updateLoading(false);
    }
  }

}