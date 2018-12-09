import { BaseController } from "../../BaseController";
import { Donor } from "../../../definitions/types/Donor";

/* TODO: Move to Config */
const DONATIONS_PER_PAGE = 25;

export class DonationAnalyticsController extends BaseController {

  public async fetchDonationsBulk(pageNumber: number) {
    const { purchaseService } = this.serviceRegistry;
    const { dashboardState } = this.stateRegistry;
    try {
      const start = DONATIONS_PER_PAGE * (pageNumber - 1);
      const result = await purchaseService.getDonationsBulk(start, DONATIONS_PER_PAGE);
      dashboardState.updateDonations(result.donations);
      dashboardState.updateDonationDonors(result.donors);
    }
    catch (e) {
      /* TODO: Show error toast */
    }
  }

  public getDonorFromDonations(donorId: number): Donor | null {
    const { dashboardState } = this.stateRegistry;

    for (let i = 0; i < dashboardState.donationDonors.length; i++) {
      const donor = dashboardState.donationDonors[i];
      if (donor.id === donorId) return donor;
    }

    return null;
  }


}