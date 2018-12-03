import axios from "axios";
import { BaseController } from "./BaseController";

export class EventController extends BaseController {

  public async fetchEvent(eventId: number): Promise<void> {
    const { eventState } = this.stateRegistry;
    eventState.updateLoading(true);


    try {
      const url = this.getBackendUrl() + "/events/get";
      const params = { id : eventId };
      const response = await axios.get(url, { params });
      if (response.data.success) {
        eventState.updateEvent(response.data.event);
      }
    }
    catch (error) {
      console.error(error);
    }
    finally {
      eventState.updateLoading(false);
    }

  }

}