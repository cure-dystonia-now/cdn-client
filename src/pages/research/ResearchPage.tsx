import React from "react";
import { inject, observer } from "mobx-react";

import { PageProps } from "../../definitions/PageProps";
import { NavigationBarHelper } from "../../utilities/helpers/NavigationBarHelper";

@inject("pageDependencies")
@observer
export class ResearchPage extends React.Component<PageProps> {

  async componentDidMount() {
    NavigationBarHelper.updatePageFromDependencies(this.props.pageDependencies, "Research");
    await this.props.pageDependencies.controllerRegistry.researchController.getEvent();
  }

  render() {
    return (
      <div>
        <p>This is the research page</p>
      </div>
    );
  }

}