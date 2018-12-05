import { action, observable } from "mobx";
import bind from "bind-decorator";
import { Event } from "../../definitions/types/Event";
import { EventEditorState } from "./substates/EventEditorState";
import { Research } from "../../definitions/types/Research";
import { ResearchEditorState } from "./substates/ResearchEditorState";

export class DashboardState {

  @observable
  public eventsStartId: number;

  @observable
  public events: Array<Event>;

  @observable
  public eventEditorState: EventEditorState;

  @observable
  public research: Array<Research>;

  @observable
  public researchEditorState: ResearchEditorState;

  constructor() {
    this.eventsStartId = 0;
    this.events = [];
    this.eventEditorState = new EventEditorState();
    this.research = [];
    this.researchEditorState = new ResearchEditorState();
  }

  @bind
  @action
  public updateEvents(events: Array<Event>): void {
    this.events = events;
  }

  @bind
  @action
  public resetEventEditorState(id?: number): void {
    this.eventEditorState = new EventEditorState(id);
  }

  @bind
  public updateResearch(researchEntries: Array<Research>): void {
    this.research = researchEntries;
  }

  @bind
  @action
  public resetResearchEditorState(id?: number): void {
    this.researchEditorState = new ResearchEditorState(id);
  }

}