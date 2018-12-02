import { BaseController } from "./BaseController";
import bind from "bind-decorator";
import axios from "axios";

export class ResearchController extends BaseController {

  @bind
  public async getEvent(): Promise<void> {
    const url = this.getBackendUrl() + "/events/get";
    const response = await axios.get(url, { withCredentials: true });
    console.log(response);
  }

}