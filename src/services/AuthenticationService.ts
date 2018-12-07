import axios from "axios";

import { Administrator } from "../definitions/Administrator";
import { BaseService } from "./generic/BaseService";

const AUTH_ADMIN_STORAGE_KEY = "AUTH_ADMIN";

export class AuthenticationService extends BaseService {

  private getAdministratorPath(): string {
    return this.getFullStoragePath(AUTH_ADMIN_STORAGE_KEY);
  }

  public loadLocalAuthAdmin(): Administrator | null {
    const rawAuthUser = localStorage.getItem(this.getAdministratorPath());
    if (!rawAuthUser) return null;

    return JSON.parse(rawAuthUser);
  }

  public saveLocalAuthAdmin(admin: Administrator): void {
    localStorage.setItem(this.getAdministratorPath(), JSON.stringify(admin));
  }

  public removeAuthUser(): void {
    localStorage.removeItem(this.getAdministratorPath());
  }

  public async submitCredentialsToBackend(email: string, password: string): Promise<any> {
    const payload = { email, password };
    const config = { withCredentials: true };

    const response = await axios.post(this.getBackendUrl() + "/authentication/login", payload, config);
    return response.data;
  }

}