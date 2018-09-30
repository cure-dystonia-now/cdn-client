"use strict";

import {action, observable} from "mobx";

export class HomeState {

  @observable
  isLoading: boolean;

  constructor() {
    this.isLoading = false;
  }

  @action
  flipLoading() {
    this.isLoading = !this.isLoading;
    console.log(this.isLoading);
  }

}