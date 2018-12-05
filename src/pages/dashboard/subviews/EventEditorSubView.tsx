import * as React from "react";

import { EventEditorSubViewProps } from "../../../definitions/props/PageProps";
import { inject, observer } from "mobx-react";
import bind from "bind-decorator";
import ReactQuill from "react-quill";
import DatePicker from "react-datepicker";
import moment from "moment";

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
const modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'},
      {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ]
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

@inject("pageDependencies")
@observer
export class EventEditorSubView extends React.Component<EventEditorSubViewProps> {

  async componentDidMount(): Promise<void> {
    const { dashboardState } = this.props.pageDependencies.stateRegistry;
    const { dashboardController } = this.props.pageDependencies.controllerRegistry;

    dashboardState.resetEditorState(this.props.match.params.id);
    await dashboardController.eventEditorController.populateFields();
  }

  @bind
  private onEditorChange(value: string): void {
    const { stateRegistry } = this.props.pageDependencies;
    const { eventEditorState } = stateRegistry.dashboardState;
    eventEditorState.updateField("description", value);
  }

  @bind
  private onFieldChange(field: string, event: React.ChangeEvent<HTMLInputElement>): void {
    const { stateRegistry } = this.props.pageDependencies;
    const { eventEditorState } = stateRegistry.dashboardState;
    eventEditorState.updateField(field, event.target.value);
  }

  @bind
  private onDateChange(date: Date): void {
    const { stateRegistry } = this.props.pageDependencies;
    const { eventEditorState } = stateRegistry.dashboardState;
    eventEditorState.updateDate(moment(date));
  }

  @bind
  private getButtonClass(): string {
    const { stateRegistry } = this.props.pageDependencies;
    const { eventEditorState } = stateRegistry.dashboardState;
    return eventEditorState.submitting ? "btn btn-primary loading" : "btn btn-primary";
  }

  render(): React.ReactNode {
    const { stateRegistry, controllerRegistry } = this.props.pageDependencies;
    const { eventEditorController } = controllerRegistry.dashboardController;
    const { eventEditorState } = stateRegistry.dashboardState;
    const { fields, date } = eventEditorState;
    return (
      <div id="eventEditor">
        <div className="columns">
          <div className="column column-md-12 column-6">
            { eventEditorState.id && (
              <div className="form-group">
                <label className="form-label">Event ID</label>
                <input className="form-input" type="text" disabled value={eventEditorState.id}/>
              </div>
            )}
          </div>
          <div className="column column-md-12 column-6">
            <div className="form-group">
              <label className="form-label">Event Date</label>
              <DatePicker dateFormat="Pp" showTimeSelect className="form-input date-input" selected={date.toDate()} onChange={this.onDateChange} />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Event Name</label>
          <input className="form-input" type="text" onChange={this.onFieldChange.bind(this, "name")} value={fields.name}/>
        </div>
        <label className="form-label">Event Description</label>
        <ReactQuill modules={modules} formats={formats} value={fields.description} onChange={this.onEditorChange}/>
        <br/>
        <div className="columns">
          <div className="column column-md-12 column-6">
            <div className="form-group">
              <label className="form-label">Street Address</label>
              <input className="form-input" type="text" onChange={this.onFieldChange.bind(this, "street_address")} value={fields.street_address}/>
            </div>
            <div className="form-group">
              <label className="form-label">State</label>
              <input className="form-input" type="text" onChange={this.onFieldChange.bind(this, "state")} value={fields.state}/>
            </div>
            <div className="form-group">
              <label className="form-label">Ticket Price</label>
              <div className="input-group">
                <span className="input-group-addon">$</span>
                <input className="form-input" type="text" onChange={this.onFieldChange.bind(this, "ticket_price")} value={fields.ticket_price}/>
              </div>
            </div>

          </div>
          <div className="column column-md-12 column-6">
            <div className="form-group">
              <label className="form-label">City</label>
              <input className="form-input" type="text" onChange={this.onFieldChange.bind(this, "city")} value={fields.city}/>
            </div>
            <div className="form-group">
              <label className="form-label">Zipcode</label>
              <input className="form-input" type="text" onChange={this.onFieldChange.bind(this, "zipcode")} value={fields.zipcode}/>
            </div>
          </div>
        </div>
        <button onClick={eventEditorController.submit} className={this.getButtonClass()}>{ eventEditorState.id ? "Update" : "Create" } Event</button>
      </div>
    )
  }

}