"use strict";

import React from "react";
import {inject, observer} from "mobx-react";
import {PageProps} from "../../definitions/PageProps";

@inject("rootState")
@observer
export class AboutPage extends React.Component<PageProps> {

  componentDidMount() {
    this.props.rootState.navigationBarState.updateCurrentPage("research");
  }

  render() {
    return (
      <div>
        <p>Hi</p>
      </div>
    )
  }

}