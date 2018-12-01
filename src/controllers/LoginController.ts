import { BaseController } from "./BaseController";

export class LoginController extends BaseController {

  public async submitCredentials(email: string, password: string): Promise<void> {
    void (email);
    void (password);
  }

}