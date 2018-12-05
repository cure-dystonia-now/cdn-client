import { BaseController } from "../../BaseController";
import bind from "bind-decorator";

export class ResearchEditorController extends BaseController {

  public async populateFields(): Promise<void> {
    const { researchService } = this.serviceRegistry;
    const { researchEditorState } = this.stateRegistry.dashboardState;
    if (!researchEditorState.id) return;
    const research = await researchService.getById(researchEditorState.id);
    if (!research) {
      researchEditorState.updateError("Research-Entry Not Found");
      return;
    }
    researchEditorState.updateFields(research);
  }

  @bind
  public async submit(): Promise<void> {
    const { researchService } = this.serviceRegistry;
    const { researchEditorState } = this.stateRegistry.dashboardState;
    researchEditorState.validateFields();
    if (researchEditorState.invalidFields.length > 0) return;

    try {
      if (researchEditorState.id) {
        await researchService.update({ ...researchEditorState.fields, id: researchEditorState.id });
        return;
      }
      const id = await researchService.create(researchEditorState.fields);
      window.location.href = `/dashboard/edit-research/${id}`;
    }
    catch (error) {
      const errorVerb = researchEditorState.id ? "update" : "create";
      researchEditorState.updateError(error.message || `Could not ${errorVerb} Research-Entry`);
      console.error(error);
    }
  }

}