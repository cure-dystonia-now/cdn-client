import { StateRegistry } from "../../state/StateRegistry";
import { ControllerRegistry } from "../../registries/ControllerRegistry";
import { ApplicationConfiguration } from "../config/ApplicationConfiguration";

export type PageDependencies = {
  stateRegistry: StateRegistry,
  controllerRegistry: ControllerRegistry,
  appConfig: ApplicationConfiguration
}