import React from "react";
import bind from "bind-decorator";
import { inject, observer } from "mobx-react";

import { PageProps } from "../../definitions/props/PageProps";

@inject("pageDependencies")
@observer
export class LoginPage extends React.Component<PageProps> {

  @bind
  private onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { stateRegistry } = this.props.pageDependencies;
    const { loginState } = stateRegistry;
    const value = event.target.value;
    loginState.updateEmail(value.length > 0 ? value : undefined);
  }

  @bind
  private onPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { stateRegistry } = this.props.pageDependencies;
    const { loginState } = stateRegistry;
    const value = event.target.value;
    loginState.updatePassword(value.length > 0 ? value : undefined);
  }

  @bind
  private getFormGroupClasses(field: string): string {
    const { stateRegistry } = this.props.pageDependencies;
    const { loginState } = stateRegistry;
    return loginState.isInvalid(field) ? "form-group has-error" : "form-group";
  }

  @bind
  private async submitCredentials() {
    const { controllerRegistry } = this.props.pageDependencies;
    const { loginController } = controllerRegistry;
    await loginController.submitCredentials();
  }

  render(): React.ReactNode {
    const { stateRegistry } = this.props.pageDependencies;
    const { loginState } = stateRegistry;
    return (
      <div id="loginPage" className="container columns">
        <div className="column col-mx-auto col-sm-12 col-md-8 col-5">
          <div className="form-wrapper">
            <div className="toast toast-error" style={{display: loginState.error ? "block" : "none"}}>
              <button className="btn btn-clear float-right" onClick={loginState.clearError}/>
              {loginState.error}
            </div>
            <div style={{marginTop: 25}} className={this.getFormGroupClasses("email")}>
              <label className="form-label">Email Address</label>
              <input className="form-input" onChange={this.onEmailChange} type="text" placeholder="me@mail.com"/>
            </div>
            <div style={{marginTop: 25}} className={this.getFormGroupClasses("password")}>
              <label className="form-label">Password</label>
              <input className="form-input" onChange={this.onPasswordChange} type="password"/>
            </div>
            <button style={{marginTop: 25}} className="btn" onClick={this.submitCredentials}>Login</button>
          </div>
        </div>
      </div>
    )
  }

}