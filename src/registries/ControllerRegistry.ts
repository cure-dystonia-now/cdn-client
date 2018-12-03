import { LoginController } from "../controllers/LoginController";
import { StateRegistry } from "../state/StateRegistry";
import { ApplicationConfiguration } from "../definitions/config/ApplicationConfiguration";
import { ResearchController } from "../controllers/ResearchController";
import { AuthenticationController } from "../controllers/AuthenticationController";

export class ControllerRegistry {

  public readonly authenticationController: AuthenticationController;
  public readonly loginController: LoginController;
  public readonly researchController: ResearchController;

  constructor(stateRegistry: StateRegistry, appConfig: ApplicationConfiguration) {
    this.authenticationController = new AuthenticationController(stateRegistry, appConfig);
    this.loginController = new LoginController(stateRegistry, appConfig, this.authenticationController);
    this.researchController = new ResearchController(stateRegistry, appConfig);
    this.authenticationController.loadLocalAuthAdmin();
  }

}