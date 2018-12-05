import { BaseController } from "./BaseController";

export class ResearchController extends BaseController {

  public async populateResearchEntries(): Promise<void> {
    const { researchService } = this.serviceRegistry;
    const { researchState } = this.stateRegistry;
    /* TODO: Paginate */
    try {
      const researchEntries = await researchService.getAll();
      researchState.updateResearchEntries(researchEntries);
    }
    catch (error) {
      console.error(error);
    }

  }

}