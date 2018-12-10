import { ApplicationConfiguration } from "../definitions/config/ApplicationConfiguration";
import { EventsService } from "../services/EventsService";
import { AuthenticationService } from "../services/AuthenticationService";
import { PurchaseService } from "../services/PurchaseService";
import { ResearchService } from "../services/ResearchService";
import { DonorService } from "../services/DonorService";

export class ServiceRegistry {

  public readonly authenticationService: AuthenticationService;
  public readonly donorService: DonorService;
  public readonly eventsService: EventsService;
  public readonly purchaseService: PurchaseService;
  public readonly researchService: ResearchService;

  constructor(appConfig: ApplicationConfiguration) {
    this.authenticationService = new AuthenticationService(appConfig);
    this.donorService = new DonorService(appConfig, this.authenticationService);
    this.eventsService = new EventsService(appConfig, this.authenticationService);
    this.purchaseService = new PurchaseService(appConfig, this.authenticationService);
    this.researchService = new ResearchService(appConfig, this.authenticationService);
  }

}