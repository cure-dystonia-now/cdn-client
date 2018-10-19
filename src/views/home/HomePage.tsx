"use strict";

import React from "react";
import {inject, observer} from "mobx-react";
import {PageProps} from "../../definitions/PageProps";
import bind from "bind-decorator";
// import {NavigationBar} from "../../components/navigation/NavigationBar";

@inject("rootState")
@observer
export class HomePage extends React.Component<PageProps> {

  @bind
  flipButton() {
    const { rootState } = this.props;
    const { homeState }  = rootState;
    homeState.flipLoading();
  }

  componentDidMount() {
    this.props.rootState.navigationBarState.updateCurrentPage("home");
  }

  render() {
    const loadingText = this.props.rootState.homeState.isLoading ? "yes" : "no";
    return (
      <div>
        {/*<NavigationBar rootState={this.props.rootState}/>*/}
        <p>Loading? <b>{loadingText}</b></p>
        <button onClick={this.flipButton}>flip</button>
      </div>
    );
  }

}