import { BaseController } from "../../BaseController";
import { EditorState, ContentState } from "draft-js";

export class EventEditorController extends BaseController {

  public async populateFields(): Promise<void> {
    const { eventsService } = this.serviceRegistry;

    const { dashboardState } = this.stateRegistry;
    const { eventEditorState } = dashboardState;

    if (!eventEditorState.id) return;
    try {
      const event = await eventsService.fetchEvent(eventEditorState.id);
      if (!event) return;
      const content = ContentState.createFromText(event.description);
      eventEditorState.updateEditorState(EditorState.createWithContent(content));
    }
    catch (error) {
      console.error(error);
    }
  }

}