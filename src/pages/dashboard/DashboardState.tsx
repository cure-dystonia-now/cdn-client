import { action, observable } from "mobx";
import bind from "bind-decorator";
import { Event } from "../../definitions/types/Event";
export class DashboardState {

  @observable
  public eventsStartId: number;

  @observable
  public events: Array<Event>;

  constructor() {
    this.eventsStartId = 0;
    this.events = [];
  }

  @bind
  @action
  public updateEvents(events: Array<Event>): void {
    this.events = events;
  }

}