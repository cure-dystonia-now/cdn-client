import { BaseController } from "../../BaseController";

const DONORS_PER_PAGE = 25;

export class DonorRegistryController extends BaseController {

  public async fetchBulk(pageNumber: number): Promise<void> {
    const { donorService } = this.serviceRegistry;
    const { dashboardState } = this.stateRegistry;
    try {
      const donors = await donorService.fetchBulk((pageNumber - 1) * DONORS_PER_PAGE, DONORS_PER_PAGE);
      dashboardState.updateDonorRegistry(donors);
    }
    catch (e) {
      console.error(e);
    }

  }

}