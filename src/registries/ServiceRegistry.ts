import { ApplicationConfiguration } from "../definitions/config/ApplicationConfiguration";
import { EventsService } from "../services/EventsService";

export class ServiceRegistry {

  public readonly eventsService: EventsService;

  constructor(appConfig: ApplicationConfiguration) {
    this.eventsService = new EventsService(appConfig);
  }

}