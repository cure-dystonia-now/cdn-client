import React from "react";
import { DashboardSubViewProps } from "../../definitions/props/PageProps";
import { inject, observer } from "mobx-react";
import { EventManagementSubView } from "./subviews/EventManagementSubView";

@inject("pageDependencies")
@observer
export class DashboardSubView extends React.Component<DashboardSubViewProps> {

  render(): React.ReactNode {
    switch (this.props.match.params.subView) {
      case "events":
        return <EventManagementSubView pageDependencies={this.props.pageDependencies}/>
      default:
        return <h1>Default</h1>
    }
  }

}
