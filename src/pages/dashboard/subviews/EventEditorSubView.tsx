import * as React from "react";
import { EditorState } from "draft-js";

import { EventEditorSubViewProps } from "../../../definitions/props/PageProps";
import { inject, observer } from "mobx-react";
import bind from "bind-decorator";
import { Editor } from "react-draft-wysiwyg";

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
  public onEditorChange(editorState: EditorState): void {
    const { stateRegistry } = this.props.pageDependencies;
    const { eventEditorState } = stateRegistry.dashboardState;
    eventEditorState.updateEditorState(editorState);
  }

  render(): React.ReactNode {
    const { stateRegistry } = this.props.pageDependencies;
    const { eventEditorState } = stateRegistry.dashboardState;
    return (
      <div id="eventEditor">
        { eventEditorState.id && (
        <div className="form-group">
          <label className="form-label">Event ID</label>
          <input className="form-input" type="text" disabled value={eventEditorState.id}/>
        </div>
        )}
        <Editor editorState={eventEditorState.editorState} onEditorStateChange={this.onEditorChange}/>
      </div>
    )
  }

}