import React from "react";
import { TicketAnalyticSubViewProps } from "../../../definitions/props/PageProps";
import { inject, observer } from "mobx-react";

@inject("pageDependencies")
@observer
export class TicketAnalyticsSubView extends React.Component<TicketAnalyticSubViewProps> {

  render(): React.ReactNode {
    return <p>{this.props.match.params.page}</p>
  }

}