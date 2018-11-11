"use strict";

import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import { HomePage } from "../views/home/HomePage";
import { ResearchPage } from "../views/research/ResearchPage";
import {RootState} from "../state/RootState";
import {Provider} from "mobx-react";
import {NavigationBar} from "./navigation/NavigationBar";
import {AboutPage} from "../views/about/AboutPage";
import {EventsPage} from "../views/events/EventsPage";
import {DonatePage} from "../views/donate/DonatePage";
import {ContactPage} from "../views/contact/ContactPage";

export class Application extends React.Component {

  private readonly rootState: RootState;

  constructor(props: any) {
    super(props);
    this.rootState = new RootState();
  }

  render() {
    return (
      <BrowserRouter>
        <Provider rootState={this.rootState}>
          <div>
            <NavigationBar rootState={this.rootState}/>
            <Route exact path="/" component={HomePage}/>
            <Route path="/research" component={ResearchPage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/events" component={EventsPage}/>
            <Route path="/donate" component={DonatePage}/>
            <Route path="/contact" component={ContactPage}/>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }

}