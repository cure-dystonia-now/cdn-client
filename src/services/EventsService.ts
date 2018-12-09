import axios from "axios";

import { ControllerService } from "./generic/ControllerService";
import { Event } from "../definitions/types/Event";
import { NameIdentifierPair } from "../definitions/types/NameIdentifierPair";

export class EventsService extends ControllerService {

  public async fetchEventsBulk(start: number, count: number): Promise<Array<Event>> {
    const url = `${this.getBackendUrl()}/events/get-bulk`;
    const params = { start, count };
    const response = await axios.get(url, { params });
    if (!response.data.success) throw Error(response.data.error || "Could not fetch events");
    return response.data.events;
  }

  public async fetchEvent(id: number): Promise<Event|undefined> {
    const url = `${this.getBackendUrl()}/events/get`;
    const params = { id };
    const response = await axios.get(url, { params });
    if (!response.data.success) throw Error(response.data.error || "Could not fetch event");
    return response.data.event;
  }

  public async updateEvent(event: Event): Promise<void> {
    const url = `${this.getBackendUrl()}/events/update`;
    const result = await this.put(url, event, { withCredentials: true });
    if (!result.success) throw Error(result.error || "Could not update event");
  }

  public async createEvent(event: Event): Promise<number> {
    const url = `${this.getBackendUrl()}/events/create`;
    const result = await this.post(url, event, { withCredentials: true });
    if (!result.success) throw Error(result.error || "Could not create event");
    return result.id;
  }

  public async fetchEventNames(): Promise<Array<NameIdentifierPair>> {
    const url = `${this.getBackendUrl()}/events/get-all/names`;
    const response = await axios.get(url);
    if (!response.data.success) throw Error(response.data.error || "Could not fetch events");
    return response.data.events;
  }

}