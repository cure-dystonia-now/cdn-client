import React from "react";
import { inject, observer } from "mobx-react";

import { PageProps } from "../../definitions/PageProps";
import { NavigationBarHelper } from "../../utilities/helpers/NavigationBarHelper";

@inject("pageDependencies")
@observer
export class AboutPage extends React.Component<PageProps> {

  componentDidMount() {
    NavigationBarHelper.updatePageFromDependencies(this.props.pageDependencies, "About");
  }

  render() {
    return (
      <div>
        <p>This is the about page</p>
      </div>
    );
  }

}