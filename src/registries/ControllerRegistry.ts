import { LoginController } from "../controllers/LoginController";
import { StateRegistry } from "../state/StateRegistry";
import { ApplicationConfiguration } from "../definitions/config/ApplicationConfiguration";
import { ResearchController } from "../controllers/ResearchController";

export class ControllerRegistry {

  public readonly loginController: LoginController;
  public readonly researchController: ResearchController;

  constructor(stateRegistry: StateRegistry, appConfig: ApplicationConfiguration) {
    this.loginController = new LoginController(stateRegistry, appConfig);
    this.researchController = new ResearchController(stateRegistry, appConfig);
  }

}