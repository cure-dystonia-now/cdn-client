import { BaseController } from "./BaseController";

export class LogoutController extends BaseController {

  public removeAuthUser() {
    const { authenticationService } = this.serviceRegistry;
    authenticationService.removeAuthUser();
  }

  public redirectHome() {
    window.location.href = "/";
  }

}