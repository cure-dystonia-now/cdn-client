import { ApplicationConfiguration } from "../definitions/config/ApplicationConfiguration";
import { EventsService } from "../services/EventsService";
import { AuthenticationService } from "../services/AuthenticationService";

export class ServiceRegistry {

  public readonly eventsService: EventsService;
  public readonly authenticationService: AuthenticationService;

  constructor(appConfig: ApplicationConfiguration) {
    this.authenticationService = new AuthenticationService(appConfig);
    this.eventsService = new EventsService(appConfig, this.authenticationService);
  }

}