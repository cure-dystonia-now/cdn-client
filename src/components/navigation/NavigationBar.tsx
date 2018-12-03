import React from "react";
import bind from "bind-decorator";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

import { PageProps } from "../../definitions/props/PageProps";

/**
 * NavigationBar Component
 * @author Aaron J. Shapiro <aaron@babaco.com>
 */
@observer
export class NavigationBar extends React.Component<PageProps> {

  @bind
  getLinkClass(pageName: string): string {
    const { stateRegistry } = this.props.pageDependencies;
    const { navigationBarState } = stateRegistry;
    const baseClass = "link";
    return navigationBarState.currentPage === pageName ? `${baseClass} active` : baseClass;
  }

  render() {
    return (
      <div id="navigation" className="columns col-oneline">
        <div className="column col-sm-9 col-md-11">
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
        <div className="column col-sm-3 col-md-1">
          <p>Right side of NavBar</p>
        </div>
      </div>
    )
  }

}