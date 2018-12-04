import * as React from "react";
import Quill from "quill";

import { EventEditorSubViewProps } from "../../../definitions/props/PageProps";
import { inject, observer } from "mobx-react";
import bind from "bind-decorator";

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
  private onFieldChange(field: string, value: string): void {
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
      </div>
    )
  }

}