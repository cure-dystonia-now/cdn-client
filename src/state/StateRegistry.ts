import { HomeState } from "../pages/home/HomeState";
import { LoginState } from "../pages/login/LoginState";
import { NavigationBarState } from "../components/navigation/NavigationBarState";

export class StateRegistry {

  public readonly homeState: HomeState;
  public readonly loginState: LoginState;
  public readonly navigationBarState: NavigationBarState;

  constructor() {
    this.homeState = new HomeState();
    this.loginState = new LoginState();
    this.navigationBarState = new NavigationBarState();
  }

}