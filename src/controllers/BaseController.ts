import { StateRegistry } from "../state/StateRegistry";
import { ApplicationConfiguration } from "../definitions/config/ApplicationConfiguration";

export class BaseController {

  protected readonly stateRegistry: StateRegistry;
  protected readonly appConfig: ApplicationConfiguration;

  public constructor(stateRegistry: StateRegistry, appConfig: ApplicationConfiguration) {
    this.stateRegistry = stateRegistry;
    this.appConfig = appConfig;
  }

  protected getBackendUrl(): string {
    const { backend } = this.appConfig;
    const protocol = backend.secure ? "https" : "http";
    const port = backend.port ? `:${backend.port}` : "";
    return `${protocol}://${backend.host}${port}`;
  }

  protected getFullStoragePath(key: string): string {
    const { storage } = this.appConfig;
    return `${storage.superKey}/${key}`;
  }

}