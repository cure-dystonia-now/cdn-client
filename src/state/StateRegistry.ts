import { HomeState } from "../pages/home/HomeState";
import { LoginState } from "../pages/login/LoginState";
import { NavigationBarState } from "../components/navigation/NavigationBarState";
import { AuthenticationState } from "./AuthenticationState";
import { EventState } from "../pages/event/EventState";
import { DashboardState } from "../pages/dashboard/DashboardState";
import { EventListingState } from "../pages/event_listing/EventListingState";
import { ResearchState } from "../pages/research/ResearchState";
import { DonateState } from "../pages/donate/DonateState";

export class StateRegistry {

  public readonly authenticationState: AuthenticationState;
  public readonly donateState: DonateState;
  public readonly dashboardState: DashboardState;
  public readonly eventListingState: EventListingState;
  public readonly eventState: EventState;
  public readonly homeState: HomeState;
  public readonly loginState: LoginState;
  public readonly navigationBarState: NavigationBarState;
  public readonly researchState: ResearchState;

  constructor() {
    this.authenticationState = new AuthenticationState();
    this.dashboardState = new DashboardState();
    this.donateState = new DonateState();
    this.eventListingState = new EventListingState();
    this.eventState = new EventState();
    this.homeState = new HomeState();
    this.loginState = new LoginState();
    this.navigationBarState = new NavigationBarState();
    this.researchState = new ResearchState();
  }

}