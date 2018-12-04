import React from "react";
import { DashboardSubViewProps } from "../../definitions/props/PageProps";
import { inject, observer } from "mobx-react";
import { EventManagementSubView } from "./subviews/EventManagementSubView";
import { EventEditorSubView } from "./subviews/EventEditorSubView";
import { Route, Switch } from "react-router";

@inject("pageDependencies")
@observer
export class DashboardSubView extends React.Component<DashboardSubViewProps> {

  render(): React.ReactNode {
    return (
      <Switch>
        <Route path="/dashboard/events" component={EventManagementSubView}/>
        <Route path="/dashboard/edit-event/:id?" component={EventEditorSubView}/>
        <Route render={() => <h1>Not Found</h1>}/>
      </Switch>
    )
  }

}
