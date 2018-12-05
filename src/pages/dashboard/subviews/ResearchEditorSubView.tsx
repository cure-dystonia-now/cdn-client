import React from "react";
import { ContentEditorSubViewProps } from "../../../definitions/props/PageProps";
import { inject, observer } from "mobx-react";
import ReactQuill from "react-quill";
import bind from "bind-decorator";

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
];

@inject("pageDependencies")
@observer
export class ResearchEditorSubView extends React.Component<ContentEditorSubViewProps> {

  async componentDidMount() {
    const { stateRegistry, controllerRegistry } = this.props.pageDependencies;
    const { researchEditorController } = controllerRegistry.dashboardController;
    const { dashboardState } = stateRegistry;
    dashboardState.resetResearchEditorState(this.props.match.params.id);
    await researchEditorController.populateFields();
  }

  private onFieldChange(field: string, event: React.ChangeEvent<HTMLInputElement>) {
    const { stateRegistry } = this.props.pageDependencies;
    const { researchEditorState } = stateRegistry.dashboardState;
    researchEditorState.updateField(field, event.target.value);
  }

  @bind
  private getInputClass(field: string) {
    const { stateRegistry } = this.props.pageDependencies;
    const { researchEditorState } = stateRegistry.dashboardState;
    return researchEditorState.invalidFields.indexOf(field) > -1 ? "form-input is-error" : "form-input";
  }

  @bind
  private onEditorChange(value: string) {
    const { stateRegistry } = this.props.pageDependencies;
    const { researchEditorState } = stateRegistry.dashboardState;
    researchEditorState.updateField("description", value);
  }

  render() {
    const { stateRegistry, controllerRegistry } = this.props.pageDependencies;
    const { researchEditorController } = controllerRegistry.dashboardController;
    const { researchEditorState } = stateRegistry.dashboardState;
    const { error, fields, id } = researchEditorState;
    return (
      <div id="researchEditor">
        {error &&
          <div className="toast toast-error" style={{marginBottom: 30}}>
            <button className="btn btn-clear float-right"/>
            { error }
          </div>
        }
        <div className="columns">
          <div className="column col-9 col-sm-12">
            <div className="form-group">
              <label className="form-label">Study Title</label>
              <input className={this.getInputClass("title")} type="text" tabIndex={1}
                onChange={this.onFieldChange.bind(this, "title")} value={fields.title || ""}/>
            </div>
          </div>
          {
            id &&
            <div className="column col-3 col-sm-12">
              <div className="form-group">
                <label className="form-label">ID</label>
                <input className="form-input" type="text" disabled value={id}/>
              </div>
            </div>
          }
        </div>
        <ReactQuill tabIndex={2} modules={modules} formats={formats} value={fields.description || ""} onChange={this.onEditorChange}/>
        <br/>
        <div className="columns">
          <div className="column col-10 col-sm-12">
            <div className="form-group">
              <label className="form-label">Association</label>
              <input className={this.getInputClass("association")} type="text" tabIndex={3}
                     onChange={this.onFieldChange.bind(this, "association")} value={fields.association || ""}/>
            </div>
          </div>
          <div className="column col-2 col-sm-12">
            <div className="form-group">
              <label className="form-label">Year</label>
              <input className={this.getInputClass("year")} type="text" tabIndex={4}
                     onChange={this.onFieldChange.bind(this, "year")} value={fields.year || ""}/>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column col-12">
            <div className="form-group">
              <label className="form-label">Author(s)</label>
              <input className={this.getInputClass("author")} type="text" tabIndex={5}
                     onChange={this.onFieldChange.bind(this, "author")} value={fields.author || ""}/>
            </div>
          </div>
        </div>
        <button onClick={researchEditorController.submit} className="btn btn-primary">{id ? "Update" : "Create"} Research</button>
      </div>
    )
  }

}