import { BaseController } from "./BaseController";
import { StateRegistry } from "../state/StateRegistry";
import { ServiceRegistry } from "../registries/ServiceRegistry";
import { ApplicationConfiguration } from "../definitions/config/ApplicationConfiguration";
import { EventEditorController } from "./subcontrollers/dashboard/EventEditorController";

export class DashboardController extends BaseController {

  public readonly eventEditorController: EventEditorController;

  constructor(stateRegistry: StateRegistry, serviceRegistry: ServiceRegistry, appConfig: ApplicationConfiguration) {
    super(stateRegistry, serviceRegistry, appConfig);
    this.eventEditorController = new EventEditorController(stateRegistry, serviceRegistry, appConfig);
  }

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
      console.error(error);
    }
  }

}