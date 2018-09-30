"use strict";

import { HomeState } from "../views/home/HomeState";

export class RootState {

  public homeState: HomeState;

  constructor() {
    this.homeState = new HomeState();
  }

}