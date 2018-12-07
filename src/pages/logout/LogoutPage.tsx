import React from "react";
import { PagePropsGeneric } from "../../definitions/props/PageProps";
import {inject, observer} from "mobx-react";

@inject("pageDependencies")
@observer
export class LogoutPage extends React.Component<PagePropsGeneric> {

  componentDidMount() {
    const { logoutController } = this.props.pageDependencies.controllerRegistry;
    logoutController.removeAuthUser();
    logoutController.redirectHome();
  }

  render() {
    return (
      <div/>
    )
  }

}