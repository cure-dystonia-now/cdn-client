import bind from "bind-decorator";
import {action, observable} from "mobx";

export class NavigationBarState {

  @observable
  public currentPage: string | undefined;

  @bind
  @action
  public updateCurrentPage(currentPage: string) {
    this.currentPage = currentPage;
  }

}