import { BaseController } from "./BaseController";

export class DashboardController extends BaseController {

  public async fetchEvents(): Promise<void> {
    const { eventsService } = this.serviceRegistry;
    const { dashboardState } = this.stateRegistry;

    const { eventsStartId } = dashboardState;
    const { eventsPerPage } = this.appConfig.dashboard;

    try {
      const events = await eventsService.fetchEventsBulk(eventsStartId, eventsPerPage);
      dashboardState.updateEvents(events);
    }
    catch (error) {

    }
  }

}