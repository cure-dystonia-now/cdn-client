import { RouteProps } from "react-router";
import React from "react";

export interface AuthenticatedRouteProps extends RouteProps {
  isAuthenticated: boolean,
  component: React.ComponentType<any>
}