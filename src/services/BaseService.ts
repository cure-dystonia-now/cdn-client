import { ApplicationConfiguration } from "../definitions/config/ApplicationConfiguration";

export class BaseService {

  protected readonly appConfig: ApplicationConfiguration;

  constructor(appConfig: ApplicationConfiguration) {
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