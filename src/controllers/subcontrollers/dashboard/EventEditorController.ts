import moment from "moment";
import { BaseController } from "../../BaseController";
import { Event } from "../../../definitions/types/Event";
import bind from "bind-decorator";

export class EventEditorController extends BaseController {

  @bind
  public async submit(): Promise<void> {
    const { eventsService } = this.serviceRegistry;

    const { dashboardState } = this.stateRegistry;
    const { eventEditorState } = dashboardState;

    eventEditorState.validateFields();
    if (eventEditorState.invalidFields.length > 0) return;

    eventEditorState.updateSubmitting(true);
    try {
      const editedEvent = this.getCurrentStateEvent();
      if (eventEditorState.id) {
        await eventsService.updateEvent(editedEvent);
      }
      else {
        const id = await eventsService.createEvent(editedEvent);
        window.location.href = `/dashboard/edit-event/${id}`;
      }
    }
    catch (error) {
      console.error(error);
    }
    finally {
      eventEditorState.updateSubmitting(false);
    }
  }

  private getCurrentStateEvent(): Event {
    const { dashboardState } = this.stateRegistry;
    const { eventEditorState } = dashboardState;
    const { fields, id, date } = eventEditorState;

    return {
      id: Number(id) || 0,
      name: fields.name!,
      description: fields.description!,
      street_address: fields.street_address!,
      city: fields.city!,
      state: fields.state!,
      zipcode: fields.zipcode!,
      date: date.format(),
      ticket_price: fields.ticket_price
    }
  }

  public async populateFields(): Promise<void> {
    const { eventsService } = this.serviceRegistry;

    const { dashboardState } = this.stateRegistry;
    const { eventEditorState } = dashboardState;

    if (!eventEditorState.id) return;
    try {
      const event = await eventsService.fetchEvent(eventEditorState.id);
      if (!event) return;

      eventEditorState.updateField("description", event.description);
      eventEditorState.updateField("name", event.name);
      eventEditorState.updateField("street_address", event.street_address);
      eventEditorState.updateField("city", event.city);
      eventEditorState.updateField("state", event.state);
      eventEditorState.updateField("zipcode", event.zipcode);
      eventEditorState.updateField("ticket_price", event.ticket_price);
      eventEditorState.updateDate(moment.parseZone(event.date));
    }
    catch (error) {
      console.error(error);
    }
  }

}