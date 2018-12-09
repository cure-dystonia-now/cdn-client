import { action, observable } from "mobx";
import bind from "bind-decorator";

const requiredFields = ["first_name", "last_name", "email", "phone_number", "street_address", "city", "state", "zipcode", "amount"];

export class DonateState {

  @observable
  public formFields: any;

  @observable
  public error?: string;

  @observable
  public invalidFields: Array<string>;

  @observable
  public submitting: boolean;

  constructor() {
    this.formFields = {};
    this.invalidFields = [];
    this.submitting = false;
  }

  @bind
  @action
  public updateField(field: string, value: string | number) {
    this.formFields[field] = value;
  }

  @bind
  @action
  public validateFields(): void {
    this.invalidFields = [];
    for (let i = 0; i < requiredFields.length; i++) {
      const requiredField = requiredFields[i];
      if (!this.formFields.hasOwnProperty(requiredField)) this.invalidFields.push(requiredField);
    }
  }

  @bind
  @action
  public updateError(error?: string): void {
    this.error = error;
  }

  @bind
  @action
  public updateSubmitting(submitting: boolean): void {
    this.submitting = submitting;
  }

}