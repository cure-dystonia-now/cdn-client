"use strict";

import React from "react";
import {inject, observer} from "mobx-react";
import {StatefulPage} from "../../definitions/StatefulPage";
import bind from "bind-decorator";

@inject("rootState")
@observer
export class HomePage extends React.Component<StatefulPage> {

  @bind
  flipButton() {
    const { rootState } = this.props;
    const { homeState }  = rootState;
    homeState.flipLoading();
  }

  render() {
    const loadingText = this.props.rootState.homeState.isLoading ? "yes" : "no";
    return (
      <div>
        <p>Loading? <b>{loadingText}</b></p>
        <button onClick={this.flipButton}>flip</button>
      </div>
    );
  }

}