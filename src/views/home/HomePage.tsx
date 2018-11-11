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
    return (
      <div className="container">
        <div className="columns card-wrapper">
          <div className="column col-sm-12 col-7">
            <div className="card">
              <h1>Hello</h1>
            </div>
          </div>
          <div className="column col-sm-12 col-5">
            <div className="card">
              <h1>Goodbye</h1>
            </div>
            <div className="card">
              <h1>Goodbye</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

}