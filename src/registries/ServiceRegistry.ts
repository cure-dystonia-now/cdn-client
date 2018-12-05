import { ApplicationConfiguration } from "../definitions/config/ApplicationConfiguration";
import { EventsService } from "../services/EventsService";
import { AuthenticationService } from "../services/AuthenticationService";
import { PurchaseService } from "../services/PurchaseService";

export class ServiceRegistry {

  public readonly authenticationService: AuthenticationService;
  public readonly eventsService: EventsService;
  public readonly purchaseService: PurchaseService;

  constructor(appConfig: ApplicationConfiguration) {
    this.authenticationService = new AuthenticationService(appConfig);
    this.eventsService = new EventsService(appConfig, this.authenticationService);
    this.purchaseService = new PurchaseService(appConfig, this.authenticationService);
  }

}