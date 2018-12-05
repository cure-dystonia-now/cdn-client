import { action, observable } from "mobx";
import bind from "bind-decorator";
import moment, { Moment } from "moment";

const REQUIRED_FIELDS = ["name", "description", "street_address", "city", "state", "zipcode"];

export class EventEditorState {

  @observable
  public id?: number;

  @observable
  public fields: any;

  @observable
  public invalidFields: Array<string>;

  @observable
  public date: Moment;

  @observable
  public submitting: boolean;

  constructor(id?: number) {
    this.id = id;
    this.invalidFields = [];
    this.fields = {
      name: "",
      street_address: "",
      city: "",
      state: "",
      zipcode: "",
      description: "",
      ticket_price: ""
    };
    this.date = moment();
    this.submitting = false;
  }

  @bind
  @action
  updateField(field: string, value?: string | number): void {
    this.fields[field] = value;
  }

  @bind
  @action
  updateDate(date: Moment): void {
    this.date = date;
  }

  @bind
  @action
  updateSubmitting(submitting: boolean): void {
    this.submitting = submitting;
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