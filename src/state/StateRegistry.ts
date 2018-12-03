import { HomeState } from "../pages/home/HomeState";
import { LoginState } from "../pages/login/LoginState";
import { NavigationBarState } from "../components/navigation/NavigationBarState";
import { AuthenticationState } from "./AuthenticationState";

export class StateRegistry {

  public readonly authenticationState: AuthenticationState;
  public readonly homeState: HomeState;
  public readonly loginState: LoginState;
  public readonly navigationBarState: NavigationBarState;

  constructor() {
    this.authenticationState = new AuthenticationState();
    this.homeState = new HomeState();
    this.loginState = new LoginState();
    this.navigationBarState = new NavigationBarState();
  }

}