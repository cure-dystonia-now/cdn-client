import { ControllerService } from "./generic/ControllerService";
import { Research } from "../definitions/types/Research";

export class ResearchService extends ControllerService {

  public async getById(id: number): Promise<Research|null> {
    const url = `${this.getBackendUrl()}/research/get`;
    const response = await this.get(url, { params: {id} });
    if (!response.success) throw Error(response.error || "Could not fetch research");
    return response.research || null;
  }

  public async getBulk(start: number, count: number): Promise<Array<Research>> {
    const url = `${this.getBackendUrl()}/research/get-bulk`;
    const params = { start, count };
    const response = await this.get(url, { params });
    if (!response.success) throw Error(response.error || "Could not fetch research");
    return response.research_entries || [];
  }

  public async update(research: Research): Promise<void> {
    if (!research.id) throw Error("Cannot update research without identifier");
    const url = `${this.getBackendUrl()}/research/update`;
    const response = await this.put(url, research, { withCredentials: true });
    if (!response.success) throw Error(response.error || "Could not update research");
  }

  public async create(research: Research): Promise<number> {
    const url = `${this.getBackendUrl()}/research/create`;
    const response = await this.post(url, research, { withCredentials: true });
    if (!response.success || !response.id) throw Error(response.error || "Could not update research");
    return response.id;
  }

}