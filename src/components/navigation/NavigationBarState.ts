"use strict";

import {action, observable} from "mobx";
import bind from "bind-decorator";

export class NavigationBarState {

  @observable
  public currentPage: string | undefined;

  @bind
  @action
  public updateCurrentPage(currentPage: string) {
    this.currentPage = currentPage;
  }

}