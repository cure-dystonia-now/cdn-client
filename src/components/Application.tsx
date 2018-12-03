import React from "react";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";

import { StateRegistry } from "../state/StateRegistry";
import { ControllerRegistry } from "../registries/ControllerRegistry";
import { ConfigurationManager } from "../utilities/ConfigurationManager";

import { PageDependencies } from "../definitions/dependencies/PageDependencies";


import { NavigationBar } from "./navigation/NavigationBar";
import { Footer } from "./footer/Footer";
import { ApplicationRouter } from "./routers/ApplicationRouter";

export class Application extends React.Component {

  private readonly pageDependencies: PageDependencies;

  constructor(props: any) {
    super(props);
    this.pageDependencies = this.getPageDependencies();
  }

  private getPageDependencies(): PageDependencies {
    const stateRegistry = new StateRegistry();
    const appConfig = ConfigurationManager.getEnvironmentConfiguration();
    const controllerRegistry = new ControllerRegistry(stateRegistry, appConfig);
    return { stateRegistry, controllerRegistry, appConfig };
  }

  render() {
    return (
      <BrowserRouter>
        <Provider pageDependencies={this.pageDependencies}>
          <div className="page-wrapper">
            <NavigationBar pageDependencies={this.pageDependencies}/>
            <div className="page">
              <ApplicationRouter/>
            </div>
            <Footer/>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }

}