import bind from "bind-decorator";
import { action, observable } from "mobx";
import { Event } from "../../definitions/types/Event";
export class EventState {

  @observable
  public event?: Event;

  @observable
  public loading: boolean;

  constructor() {
    this.loading = false;
  }

  @bind
  @action
  public updateEvent(event: Event) {
    this.event = event;
  }

  @bind
  @action
  public updateLoading(loading: boolean) {
    this.loading = loading;
  }

}