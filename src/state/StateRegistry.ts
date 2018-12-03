import { HomeState } from "../pages/home/HomeState";
import { LoginState } from "../pages/login/LoginState";
import { NavigationBarState } from "../components/navigation/NavigationBarState";
import { AuthenticationState } from "./AuthenticationState";
import { EventState } from "../pages/event/EventState";

export class StateRegistry {

  public readonly authenticationState: AuthenticationState;
  public readonly eventState: EventState;
  public readonly homeState: HomeState;
  public readonly loginState: LoginState;
  public readonly navigationBarState: NavigationBarState;

  constructor() {
    this.authenticationState = new AuthenticationState();
    this.eventState = new EventState();
    this.homeState = new HomeState();
    this.loginState = new LoginState();
    this.navigationBarState = new NavigationBarState();
  }

}