import axios from "axios";

import { BaseController } from "./BaseController";
import { Administrator } from "../definitions/Administrator";

const AUTH_ADMIN_STORAGE_KEY = "AUTH_ADMIN";

export class AuthenticationController extends BaseController {

  private getAdministratorPath(): string {
    return this.getFullStoragePath(AUTH_ADMIN_STORAGE_KEY);
  }

  public async loadLocalAuthAdmin(): Promise<void> {
    const { authenticationState } = this.stateRegistry;

    const rawAuthUser = localStorage.getItem(this.getAdministratorPath());
    if (!rawAuthUser) return;

    const authUser = JSON.parse(rawAuthUser);
    authenticationState.setAuthAdmin(authUser);
  }

  public saveLocalAuthAdmin(admin: Administrator): void {
    const { authenticationState } = this.stateRegistry;
    authenticationState.setAuthAdmin(admin);
    localStorage.setItem(this.getAdministratorPath(), JSON.stringify(admin));
  }

  public removeAuthUser(): void {
    localStorage.removeItem(this.getAdministratorPath());
  }

  public async submitCredentialsToBackend(email: string, password: string): Promise<any> {
    const payload = { email, password };
    const config = { withCredentials: true };

    const response = await axios.post(this.getBackendUrl() + "/authentication/login", payload, config);
    this.saveLocalAuthAdmin(response.data.admin!);

    return response.data;
  }

}