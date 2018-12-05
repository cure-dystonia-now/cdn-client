import { BaseController } from "./BaseController";
import { Administrator } from "../definitions/Administrator";

const AUTH_ADMIN_STORAGE_KEY = "AUTH_ADMIN";

export class AuthenticationController extends BaseController {

  private getAdministratorPath(): string {
    return this.getFullStoragePath(AUTH_ADMIN_STORAGE_KEY);
  }

  public loadLocalAuthAdmin(): void {
    const { authenticationService } = this.serviceRegistry;
    const { authenticationState } = this.stateRegistry;

    const authAdmin = authenticationService.loadLocalAuthAdmin();
    if (authAdmin) authenticationState.setAuthAdmin(authAdmin);
  }

  public saveLocalAuthAdmin(admin: Administrator): void {
    const { authenticationState } = this.stateRegistry;
    authenticationState.setAuthAdmin(admin);
    localStorage.setItem(this.getAdministratorPath(), JSON.stringify(admin));
  }

  public removeAuthUser(): void {
    localStorage.removeItem(this.getAdministratorPath());
  }

}