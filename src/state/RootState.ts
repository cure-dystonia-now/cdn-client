"use strict";

import { HomeState } from "../views/home/HomeState";
import { NavigationBarState } from "../components/navigation/NavigationBarState";

export class RootState {

  public readonly homeState: HomeState;
  public readonly navigationBarState: NavigationBarState;

  constructor() {
    this.homeState = new HomeState();
    this.navigationBarState = new NavigationBarState();
  }

}