import React from "react";
import { Route } from "react-router";
import { HomePage } from "../../pages/home/HomePage";
import { ResearchPage } from "../../pages/research/ResearchPage";
import { AboutPage } from "../../pages/about/AboutPage";
import { LoginPage } from "../../pages/login/LoginPage";
import { AuthenticatedRoute } from "./AuthenticatedRoute";
import { StatefulComponent } from "../../definitions/props/PageProps";
import { EventPage } from "../../pages/event/EventPage";


export class ApplicationRouter extends React.Component<StatefulComponent> {

  render() {
    const { authenticationState } = this.props.pageDependencies.stateRegistry;
    const isAuthenticated = authenticationState.isAuthenticated();
    return (
      <div>
        <Route exact path="/" component={HomePage}/>
        <Route path="/research" component={ResearchPage}/>
        <AuthenticatedRoute isAuthenticated={isAuthenticated} path="/about" component={AboutPage}/>
        <Route path="/event/:id" component={EventPage}/>
        <Route path="/login" component={LoginPage}/>
      </div>
    )
  }

}