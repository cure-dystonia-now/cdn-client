import React from "react";
import { Provider } from "mobx-react";
import { BrowserRouter, Route } from "react-router-dom";

import { StateRegistry } from "../state/StateRegistry";
import { ControllerRegistry } from "../registries/ControllerRegistry";
import { ConfigurationManager } from "../utilities/ConfigurationManager";

import { PageDependencies } from "../definitions/dependencies/PageDependencies";

import { AboutPage } from "../pages/about/AboutPage";
import { HomePage } from "../pages/home/HomePage";
import { ResearchPage } from "../pages/research/ResearchPage";

import { NavigationBar } from "./navigation/NavigationBar";
import { Footer } from "./footer/Footer";
import { LoginPage } from "../pages/login/LoginPage";

export class Application extends React.Component {

  private readonly pageDependencies: PageDependencies;

  constructor(props: any) {
    super(props);
    this.pageDependencies = this.getPageDependencies();
  }

  private getPageDependencies(): PageDependencies {
    const stateRegistry = new StateRegistry();
    const controllerRegistry = new ControllerRegistry(stateRegistry);
    const appConfig = ConfigurationManager.getEnvironmentConfiguration();
    return { stateRegistry, controllerRegistry, appConfig };
  }

  render() {
    return (
      <BrowserRouter>
        <Provider pageDependencies={this.pageDependencies}>
          <div className="page-wrapper">
            <NavigationBar pageDependencies={this.pageDependencies}/>
            <div className="page">
              <Route exact path="/" component={HomePage}/>
              <Route path="/research" component={ResearchPage}/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/login" component={LoginPage}/>
            </div>
            <Footer/>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }

}