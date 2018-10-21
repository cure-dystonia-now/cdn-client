"use strict";

import React from "react";
import { inject, observer } from "mobx-react";
import { PageProps } from "../../definitions/PageProps";

@inject("rootState")
@observer
export class AboutPage extends React.Component<PageProps> {

  componentDidMount() {
    this.props.rootState.navigationBarState.updateCurrentPage("about");
  }

  render() {
    return (
      <div>
        <p>This is the about page</p>
      </div>
    );
  }

}