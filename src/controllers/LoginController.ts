import { BaseController } from "./BaseController";
import { StateRegistry } from "../state/StateRegistry";
import { ApplicationConfiguration } from "../definitions/config/ApplicationConfiguration";
import { AuthenticationController } from "./AuthenticationController";

export class LoginController extends BaseController {

  private readonly authController: AuthenticationController;

  constructor(stateRegistry: StateRegistry, appConfig: ApplicationConfiguration, authController: AuthenticationController) {
    super(stateRegistry, appConfig);
    this.authController = authController;
  }

  public async submitCredentials(): Promise<void> {
    const { loginState } = this.stateRegistry;

    loginState.validateFields();
    if (loginState.invalidFields.length > 0) return;

    try {
      const response = await this.authController.submitCredentialsToBackend(loginState.email!, loginState.password!);
      if (!response.success) {
        loginState.updateError(response.error || "error");
        return;
      }
    }
    catch (error) {
      loginState.updateError("error");
    }
  }
}