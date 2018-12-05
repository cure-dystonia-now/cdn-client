import { ApplicationConfiguration } from "../definitions/config/ApplicationConfiguration";
import { StateRegistry } from "../state/StateRegistry";

import { AuthenticationController } from "../controllers/AuthenticationController";
import { EventController } from "../controllers/EventController";
import { LoginController } from "../controllers/LoginController";
import { ResearchController } from "../controllers/ResearchController";
import { ServiceRegistry } from "./ServiceRegistry";
import { DashboardController } from "../controllers/DashboardController";
import { EventListingController } from "../controllers/EventListingController";

export class ControllerRegistry {

  public readonly authenticationController: AuthenticationController;
  public readonly dashboardController: DashboardController;
  public readonly eventListingController: EventListingController;
  public readonly eventController: EventController;
  public readonly loginController: LoginController;
  public readonly researchController: ResearchController;

  constructor(stateRegistry: StateRegistry, serviceRegistry: ServiceRegistry, appConfig: ApplicationConfiguration) {
    this.authenticationController = new AuthenticationController(stateRegistry, serviceRegistry, appConfig);
    this.dashboardController = new DashboardController(stateRegistry, serviceRegistry, appConfig);
    this.eventListingController = new EventListingController(stateRegistry, serviceRegistry, appConfig);
    this.eventController = new EventController(stateRegistry, serviceRegistry, appConfig);
    this.loginController = new LoginController(stateRegistry, serviceRegistry, appConfig);
    this.researchController = new ResearchController(stateRegistry, serviceRegistry, appConfig);
  }

}