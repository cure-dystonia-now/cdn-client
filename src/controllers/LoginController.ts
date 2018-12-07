import { BaseController } from "./BaseController";

export class LoginController extends BaseController {

  public async submitCredentials(): Promise<void> {
    const { loginState } = this.stateRegistry;
    const { authenticationService } = this.serviceRegistry;

    loginState.validateFields();
    if (loginState.invalidFields.length > 0) return;

    try {
      const response = await authenticationService.submitCredentialsToBackend(loginState.email!, loginState.password!);
      if (!response.success) {
        loginState.updateError(response.error || "error");
        return;
      }
      if (response.admin) {
        authenticationService.saveLocalAuthAdmin(response.admin);
        window.location.href = "/dashboard";
      }
    }
    catch (error) {
      loginState.updateError("error");
    }
  }
}