"use strict";

import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware, Store } from "redux";

import { HomePage } from "../views/home/HomePage";
import { ResearchPage } from "../views/research/ResearchPage";

export class Application extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={HomePage}/>
        <Route path="/research" component={ResearchPage}/>
      </BrowserRouter>
    );
  }

}