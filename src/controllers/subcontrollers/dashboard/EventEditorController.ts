import { BaseController } from "../../BaseController";

export class EventEditorController extends BaseController {

  public async submit(): Promise<void> {
    const { dashboardState } = this.stateRegistry;
    const { eventEditorState } = dashboardState;

    eventEditorState.validateFields();
    if (eventEditorState.invalidFields.length > 0) return;

    if (eventEditorState.id) {

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
    }
    catch (error) {
      console.error(error);
    }
  }

}