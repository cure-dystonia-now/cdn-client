"use strict";

import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import { HomePage } from "../views/home/HomePage";
import { ResearchPage } from "../views/research/ResearchPage";
import {RootState} from "../state/RootState";
import {Provider} from "mobx-react";

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
          <Route path="/" component={HomePage}/>
          <Route path="/research" component={ResearchPage}/>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }

}