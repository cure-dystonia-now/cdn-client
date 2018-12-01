import { StateRegistry } from "../state/StateRegistry";

export class BaseController {

  protected readonly stateRegistry: StateRegistry;

  public constructor(stateRegistry: StateRegistry) {
    this.stateRegistry = stateRegistry;
  }

}