import { BaseController } from "./BaseController";
import { StateRegistry } from "../state/StateRegistry";
import { ServiceRegistry } from "../registries/ServiceRegistry";
import { ApplicationConfiguration } from "../definitions/config/ApplicationConfiguration";
import { EventEditorController } from "./subcontrollers/dashboard/EventEditorController";
import { ResearchEditorController } from "./subcontrollers/dashboard/ResearchEditorController";
import { TicketAnalyticsController } from "./subcontrollers/dashboard/TicketAnalyticsController";

export class DashboardController extends BaseController {

  public readonly eventEditorController: EventEditorController;
  public readonly researchEditorController: ResearchEditorController;
  public readonly ticketAnalyticsController: TicketAnalyticsController;

  constructor(stateRegistry: StateRegistry, serviceRegistry: ServiceRegistry, appConfig: ApplicationConfiguration) {
    super(stateRegistry, serviceRegistry, appConfig);
    this.eventEditorController = new EventEditorController(stateRegistry, serviceRegistry, appConfig);
    this.researchEditorController = new ResearchEditorController(stateRegistry, serviceRegistry, appConfig);
    this.ticketAnalyticsController = new TicketAnalyticsController(stateRegistry, serviceRegistry, appConfig);
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

  public async fetchResearch(): Promise<void> {
    const { researchService } = this.serviceRegistry;
    const { dashboardState } = this.stateRegistry;

    try {
      const research = await researchService.getBulk(0, 25);
      dashboardState.updateResearch(research);
    }
    catch (error) {
      console.error(error);
    }
  }

}