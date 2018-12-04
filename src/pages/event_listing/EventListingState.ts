import { action, observable } from "mobx";
import bind from "bind-decorator";
import { Event } from "../../definitions/types/Event";

export class EventListingState {

  @observable
  public page?: number;

  @observable
  public loading: boolean;

  @observable
  public events: Array<Event>;

  constructor() {
    this.loading = true;
    this.events = [];
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

  @bind
  @action
  public updateEvents(events: Array<Event>) {
    this.events = events;
  }

}