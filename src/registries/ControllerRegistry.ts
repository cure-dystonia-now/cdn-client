import { ApplicationConfiguration } from "../definitions/config/ApplicationConfiguration";
import { StateRegistry } from "../state/StateRegistry";

import { AuthenticationController } from "../controllers/AuthenticationController";
import { EventController } from "../controllers/EventController";
import { LoginController } from "../controllers/LoginController";
import { ResearchController } from "../controllers/ResearchController";

export class ControllerRegistry {

  public readonly authenticationController: AuthenticationController;
  public readonly eventController: EventController;
  public readonly loginController: LoginController;
  public readonly researchController: ResearchController;

  constructor(stateRegistry: StateRegistry, appConfig: ApplicationConfiguration) {
    this.authenticationController = new AuthenticationController(stateRegistry, appConfig);
    this.eventController = new EventController(stateRegistry, appConfig);
    this.loginController = new LoginController(stateRegistry, appConfig, this.authenticationController);
    this.researchController = new ResearchController(stateRegistry, appConfig);
    this.authenticationController.loadLocalAuthAdmin();
  }

}