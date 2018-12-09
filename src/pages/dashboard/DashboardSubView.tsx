import React from "react";
import { DashboardSubViewProps } from "../../definitions/props/PageProps";
import { inject, observer } from "mobx-react";
import { EventManagementSubView } from "./subviews/EventManagementSubView";
import { EventEditorSubView } from "./subviews/EventEditorSubView";
import { Route, Switch } from "react-router";
import { ResearchManagementSubView } from "./subviews/ResearchManagementSubView";
import { ResearchEditorSubView } from "./subviews/ResearchEditorSubView";
import { TicketAnalyticsSubView } from "./subviews/TicketAnalyticsSubView";
import { DonationAnalyticsSubView } from "./subviews/DonationAnalyticsSubView";

@inject("pageDependencies")
@observer
export class DashboardSubView extends React.Component<DashboardSubViewProps> {

  render(): React.ReactNode {
    return (
      <Switch>
        <Route path="/dashboard/events" component={EventManagementSubView}/>
        <Route path="/dashboard/research" component={ResearchManagementSubView}/>
        <Route path="/dashboard/edit-event/:id?" component={EventEditorSubView}/>
        <Route path="/dashboard/edit-research/:id?" component={ResearchEditorSubView}/>
        <Route path="/dashboard/ticket-analytics/:page?" component={TicketAnalyticsSubView}/>
        <Route path="/dashboard/donation-analytics/:page?" component={DonationAnalyticsSubView}/>
        <Route render={() => <h1>Not Found</h1>}/>
      </Switch>
    )
  }

}
