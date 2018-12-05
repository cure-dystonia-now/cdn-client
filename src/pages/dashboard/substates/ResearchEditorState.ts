import bind from "bind-decorator";
import { action, observable } from "mobx";

const requiredFields = ["title", "author", "year", "association", "description"];

export class ResearchEditorState {

  @observable
  public readonly id?: number;

  @observable
  public fields: any;

  @observable
  public error?: string;

  @observable
  public invalidFields: Array<string>;

  constructor(id?: number) {
    this.id = id;
    this.fields = {};
    this.invalidFields = [];
  }

  @bind
  @action
  public updateFields(fields: any) {
    this.fields = fields;
  }

  @bind
  @action
  public updateField(field: string, value?: string | number) {
    this.fields[field] = value;
  }

  @bind
  @action
  public validateFields() {
    this.invalidFields = [];
    for (let i = 0; i < requiredFields.length; i++) {
      const field = requiredFields[i];
      if (!this.fields[field] || this.fields[field].length === 0) this.invalidFields.push(field);
    }
  }

  @bind
  @action
  public updateError(error?: string) {
    this.error = error;
  }
  
}