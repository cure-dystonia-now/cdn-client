import axios from "axios";

import { Event } from "../definitions/types/Event";
import { BaseService } from "./BaseService";

export class EventsService extends BaseService {

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

}