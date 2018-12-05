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
import { ServiceRegistry } from "../registries/ServiceRegistry";
import { StripeProvider } from "react-stripe-elements";

export class Application extends React.Component {

  private readonly pageDependencies: PageDependencies;

  constructor(props: any) {
    super(props);
    this.pageDependencies = this.getPageDependencies();
  }

  componentWillMount(): void {
    const { authenticationController } = this.pageDependencies.controllerRegistry;
    authenticationController.loadLocalAuthAdmin();
  }

  private getPageDependencies(): PageDependencies {
    const stateRegistry = new StateRegistry();
    const appConfig = ConfigurationManager.getEnvironmentConfiguration();
    const serviceRegistry = new ServiceRegistry(appConfig);
    const controllerRegistry = new ControllerRegistry(stateRegistry, serviceRegistry, appConfig);
    return { stateRegistry, controllerRegistry, appConfig };
  }

  render() {
    const { appConfig } = this.pageDependencies;
    return (
      <BrowserRouter>
        <StripeProvider apiKey={appConfig.stripe.publicKey}>
        <Provider pageDependencies={this.pageDependencies}>
          <div className="page-wrapper">
            <NavigationBar pageDependencies={this.pageDependencies}/>
            <div className="page">
              <ApplicationRouter pageDependencies={this.pageDependencies}/>
            </div>
            <Footer/>
          </div>
        </Provider>
        </StripeProvider>
      </BrowserRouter>
    );
  }

}