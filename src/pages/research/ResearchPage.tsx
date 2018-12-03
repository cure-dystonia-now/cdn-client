import React from "react";
import { inject, observer } from "mobx-react";

import { PagePropsGeneric } from "../../definitions/props/PageProps";
import { NavigationBarHelper } from "../../utilities/helpers/NavigationBarHelper";

@inject("pageDependencies")
@observer
export class ResearchPage extends React.Component<PagePropsGeneric> {

  async componentDidMount() {
    NavigationBarHelper.updatePageFromDependencies(this.props.pageDependencies, "research");
  }

  render() {
    return (
      <div>
        <p>This is the research page</p>
      </div>
    );
  }

}