import React from "react";
import { Redirect, Route } from "react-router";
import { AuthenticatedRouteProps } from "../../definitions/props/AuthenticatedRouteProps";

export class AuthenticatedRoute extends Route<AuthenticatedRouteProps> {

  render(): React.ReactNode {
    const { component: Component, ...rest } = this.props;
    return (
      <Route {...rest}
    render={(props) => {
      return this.props.isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />;
    }}
    />
  );
  }

}