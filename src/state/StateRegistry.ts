"use strict";

import { HomeState } from "../pages/home/HomeState";
import { NavigationBarState } from "../components/navigation/NavigationBarState";
import { LoginState } from "../pages/login/LoginState";

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