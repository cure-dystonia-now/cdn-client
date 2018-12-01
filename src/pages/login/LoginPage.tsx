import React from "react";
import { PageProps } from "../../definitions/PageProps";
import { inject, observer } from "mobx-react";

@inject("pageDependencies")
@observer
export class LoginPage extends React.Component<PageProps> {

  render(): React.ReactNode {
    const { stateRegistry } = this.props.pageDependencies;
    const { loginState } = stateRegistry;
    return (
      <div id="loginPage" className="container columns">
        <div className="column col-mx-auto col-sm-12 col-5">
          <div className="form-wrapper">
            <div className="toast toast-error" hidden={!!loginState.error}>
              <button className="btn btn-clear float-right" onClick={loginState.clearError}/>
              An error has occurred
            </div>
            <div className="form-group has-success">
              <label className="form-label">Email Address</label>
              <input className="form-input" type="text" id="input-example-1" placeholder="me@mail.com"/>
            </div>
          </div>
        </div>
      </div>
    )
  }

}