import { BaseController } from "../../BaseController";

export class EventEditorController extends BaseController {

  public async populateFields(): Promise<void> {
    const { eventsService } = this.serviceRegistry;

    const { dashboardState } = this.stateRegistry;
    const { eventEditorState } = dashboardState;

    if (!eventEditorState.id) return;
    try {
      const event = await eventsService.fetchEvent(eventEditorState.id);
      if (!event) return;
      eventEditorState.updateField("description", event.description);
    }
    catch (error) {
      console.error(error);
    }
  }

}