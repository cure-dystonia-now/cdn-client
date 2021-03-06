import React from "react";
import { Route } from "react-router";

import { AuthenticatedRoute } from "./AuthenticatedRoute";
import { StatefulComponent } from "../../definitions/props/PageProps";

import { HomePage } from "../../pages/home/HomePage";
import { AboutPage } from "../../pages/about/AboutPage";
import { LoginPage } from "../../pages/login/LoginPage";
import { EventPage } from "../../pages/event/EventPage";
import { ResearchPage } from "../../pages/research/ResearchPage";
import { DashboardPage } from "../../pages/dashboard/DashboardPage";
import { EventListingPage } from "../../pages/event_listing/EventListingPage";
import { LogoutPage } from "../../pages/logout/LogoutPage";
import { DonatePage } from "../../pages/donate/DonatePage";
import { Elements } from "react-stripe-elements";

export class ApplicationRouter extends React.Component<StatefulComponent> {

  render() {
    const { authenticationState } = this.props.pageDependencies.stateRegistry;
    const isAuthenticated = authenticationState.isAuthenticated();
    return (
      <Elements>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/research" component={ResearchPage}/>
          <Route path="/about" component={AboutPage}/>
          <AuthenticatedRoute isAuthenticated={isAuthenticated} path="/dashboard" component={DashboardPage}/>
          <Route path="/event/:id" component={EventPage}/>
          <Route path="/events/:page?" component={EventListingPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/donate" component={DonatePage}/>
          <Route path="/logout" component={LogoutPage}/>
        </div>
      </Elements>
    )
  }

}