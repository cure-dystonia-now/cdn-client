import { action, observable } from "mobx";
import bind from "bind-decorator";
import { Event } from "../../definitions/types/Event";
import { EventEditorState } from "./substates/EventEditorState";
export class DashboardState {

  @observable
  public eventsStartId: number;

  @observable
  public events: Array<Event>;

  @observable
  public eventEditorState: EventEditorState;

  constructor() {
    this.eventsStartId = 0;
    this.events = [];
    this.eventEditorState = new EventEditorState();
  }

  @bind
  @action
  public updateEvents(events: Array<Event>): void {
    this.events = events;
  }

  @bind
  @action
  public resetEditorState(id?: number): void {
    this.eventEditorState = new EventEditorState(id);
  }

}