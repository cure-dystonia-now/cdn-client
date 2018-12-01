import { LoginController } from "../controllers/LoginController";
import { StateRegistry } from "../state/StateRegistry";

export class ControllerRegistry {

  public readonly loginController: LoginController;

  constructor(stateRegistry: StateRegistry) {
    this.loginController = new LoginController(stateRegistry);
  }

}