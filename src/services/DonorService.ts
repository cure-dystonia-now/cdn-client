import { ControllerService } from "./generic/ControllerService";
import { Donor } from "../definitions/types/Donor";
import { DonorPayment } from "../definitions/types/DonorPayment";

export class DonorService extends ControllerService {

  public async fetchDonor(donorId: number): Promise<Donor|undefined> {
    const url = `${this.getBackendUrl()}/donors/get`;
    const params = { donor_id: donorId };
    const response = await this.get(url, { params, withCredentials: true });
    if (!response.success) throw (response.error || "Could not fetch Donor");
    return response.donor;
  }

  public async fetchPaymentHistory(donorId: number): Promise<Array<DonorPayment>> {
    const url = `${this.getBackendUrl()}/donors/payments/get`;
    const params = { donor_id: donorId };
    const response = await this.get(url, { params, withCredentials: true });
    if (!response.success) throw (response.error || "Could not fetch Donor-Payments");
    return response.donor_payments;
  }

  public async fetchBulk(start: number, count: number): Promise<Array<Donor>> {
    const url = `${this.getBackendUrl()}/donors/bulk/get`;
    const params = { start, count };
    const response = await this.get(url, { params, withCredentials: true });
    if (!response.success) throw (response.error || "Could not fetch Donors");
    return response.donors;
  }

}