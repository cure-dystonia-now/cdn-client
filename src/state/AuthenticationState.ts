import bind from "bind-decorator";
import { action, observable } from "mobx";
import { Administrator } from "../definitions/Administrator";

export class AuthenticationState {

  @observable
  public authAdmin?: Administrator;

  @bind
  @action
  public setAuthAdmin(admin: Administrator) {
    this.authAdmin = admin;
  }

  @bind
  public isAuthenticated(): boolean {
    return this.authAdmin !== undefined;
  }

}