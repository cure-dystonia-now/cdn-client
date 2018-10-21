"use strict";

import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

import { PageProps } from "../../definitions/PageProps";
import bind from "bind-decorator";

/**
 * NavigationBar Component
 * @author Aaron J. Shapiro <aaron@babaco.com>
 */
@observer
export class NavigationBar extends React.Component<PageProps> {

  @bind
  getLinkClass(pageName: string): string {
    const { rootState } = this.props;
    const { navigationBarState } = rootState;
    const baseClass = "link";
    return navigationBarState.currentPage === pageName ? `${baseClass} active` : baseClass;
  }

  render() {
    return (
      <div id="navigation" className="row">
        <div className="col-sm-12 col-md-9">
          <div className="link-wrapper">
            <div className={this.getLinkClass("home")}>
              <Link className="text" to="/">Home</Link>
            </div>
            <div className={this.getLinkClass("research")}>
              <Link className="text" to="/research">Research</Link>
            </div>
            <div className={this.getLinkClass("about")}>
              <Link className="text" to="/about">About</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-1 col-md-3">
          <p>Right side of NavBar</p>
        </div>
      </div>
    )
  }

}