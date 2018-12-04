import { action, observable } from "mobx";
import bind from "bind-decorator";
import moment, { Moment } from "moment";
import { EditorState } from "draft-js";

const REQUIRED_FIELDS = ["name", "description", "street_address", "city", "state", "zipcode"];

export class EventEditorState {

  @observable
  public id?: number;

  @observable
  public editorState?: EditorState;

  @observable
  public fields: any;

  @observable
  public invalidFields: Array<string>;

  @observable
  public date: Moment;

  constructor(id?: number) {
    this.id = id;
    this.invalidFields = [];
    this.fields = {};
    this.date = moment();
    this.editorState = EditorState.createEmpty();
  }

  @bind
  @action
  updateField(field: string, value?: string): void {
    this.fields[field] = value;
  }

  @bind
  @action
  updateEditorState(editorState: EditorState) {
    this.editorState = editorState;
  }

  @bind
  @action
  validateFields(): void {
    this.invalidFields = [];
    for (let i = 0; i < REQUIRED_FIELDS.length; i++) {
      const requiredField = REQUIRED_FIELDS[i];
      if (!this.fields.hasOwnProperty(requiredField)) {
        this.invalidFields.push(requiredField);
      }
    }
  }
}