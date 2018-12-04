import { action, observable } from "mobx";
import bind from "bind-decorator";

export class EventListingState {

  @observable
  public page?: number;

  @observable
  public loading: boolean;

  constructor() {
    this.loading = true;
  }

  @bind
  @action
  public updatePage(page?: number) {
    this.page = page || 1;
  }

  @bind
  @action
  public updateLoading(loading: boolean) {
    this.loading = loading;
  }

}