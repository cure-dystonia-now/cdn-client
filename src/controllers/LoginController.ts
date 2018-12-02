import axios from "axios";
import { BaseController } from "./BaseController";

export class LoginController extends BaseController {

  public async submitCredentials(): Promise<void> {
    const { loginState } = this.stateRegistry;

    loginState.validateFields();
    if (loginState.invalidFields.length > 0) return;

    try {
      const requestPayload = { email: loginState.email, password: loginState.password };
      const response = await axios.post(this.getBackendUrl() + "/authentication/login", requestPayload, { withCredentials: true });

      const responsePayload = response.data;
      if (!responsePayload.success) {
        loginState.updateError(responsePayload.error || "error");
        return;
      }

    }
    catch (error) {
      loginState.updateError("error");
    }
  }
}