import { ApplicationConfiguration } from "../definitions/config/ApplicationConfiguration";
import { DevelopmentConfiguration } from "../definitions/config/DevelopmentConfiguration";

export class ConfigurationManager {

  public static getEnvironmentConfiguration(): ApplicationConfiguration {
    const environment = process.env.NODE_ENV;
    switch (environment) {
      case "development":
        return DevelopmentConfiguration;
      default:
        throw Error("Could not find a configuration for the specified environment");
    }
  }

}