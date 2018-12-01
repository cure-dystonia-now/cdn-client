import bind from "bind-decorator";
import { action, observable } from "mobx";

export class LoginState {

  @observable
  public email?: string;

  @observable
  public password?: string;

  @bind
  @action
  public updateEmail(email?: string): void {
    this.email = email;
  }

  @bind
  @action
  public updatePassword(password?: string): void {
    this.password = password;
  }

}