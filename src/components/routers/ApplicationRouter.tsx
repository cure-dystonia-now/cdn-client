import React from "react";
import { Route } from "react-router";
import { HomePage } from "../../pages/home/HomePage";
import { ResearchPage } from "../../pages/research/ResearchPage";
import { AboutPage } from "../../pages/about/AboutPage";
import { LoginPage } from "../../pages/login/LoginPage";
import { AuthenticatedRoute } from "./AuthenticatedRoute";
import { PageProps } from "../../definitions/props/PageProps";


export class ApplicationRouter extends React.Component<PageProps> {

  render() {
    const { authenticationState } = this.props.pageDependencies.stateRegistry;
    const isAuthenticated = authenticationState.isAuthenticated();
    return (
      <div>
        <Route exact path="/" component={HomePage}/>
        <Route path="/research" component={ResearchPage}/>
        <AuthenticatedRoute isAuthenticated={isAuthenticated} path="/about" component={AboutPage}/>
        <Route path="/login" component={LoginPage}/>
      </div>
    )
  }

}