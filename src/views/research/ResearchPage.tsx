"use strict";

import React from "react";
import { PageProps } from "../../definitions/PageProps";
// import {NavigationBar} from "../../components/navigation/NavigationBar";
import {inject, observer} from "mobx-react";

@inject("rootState")
@observer
export class ResearchPage extends React.Component<PageProps> {

  componentDidMount() {
    this.props.rootState.navigationBarState.updateCurrentPage("research");
  }

  render() {
    return (
      <div>
        {/*<NavigationBar rootState={this.props.rootState}/>*/}
        <p>This is the research page</p>
      </div>
    );
  }

}