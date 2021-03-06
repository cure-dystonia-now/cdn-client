import React from "react";
import bind from "bind-decorator";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

import { StatefulComponent } from "../../definitions/props/PageProps";

/**
 * NavigationBar Component
 * @author Aaron J. Shapiro <aaron@babaco.com>
 */
@observer
export class NavigationBar extends React.Component<StatefulComponent> {

  @bind
  getLinkClass(pageName: string): string {
    const { stateRegistry } = this.props.pageDependencies;
    const { navigationBarState } = stateRegistry;
    const baseClass = "link";
    return navigationBarState.currentPage === pageName ? `${baseClass} active` : baseClass;
  }

  render() {
    const { stateRegistry } = this.props.pageDependencies;
    const { authenticationState } = stateRegistry;

    return (
      <div id="navigation" className="navbar">
        <section className="navbar-section">
          <Link to="/" className="btn btn-link">Home</Link>
          <Link to="/about" className="btn btn-link">About</Link>
          <Link to="/research" className="btn btn-link">Research</Link>
          <Link to="/events" className="btn btn-link">Events</Link>
          <Link to="/donate" className="btn btn-link">Donate</Link>
        </section>
        {authenticationState.isAuthenticated() &&
          <section className="navbar-section">
            <Link to="/dashboard" className="btn btn-link">Dashboard</Link>
          </section>
        }
        {/*<div className="column col-sm-9 col-md-11">*/}
          {/*<div className="link-wrapper">*/}
            {/*<div className={this.getLinkClass("home")}>*/}
              {/*<Link className="text" to="/">Home</Link>*/}
            {/*</div>*/}
            {/*<div className={this.getLinkClass("research")}>*/}
              {/*<Link className="text" to="/research">Research</Link>*/}
            {/*</div>*/}
            {/*<div className={this.getLinkClass("about")}>*/}
              {/*<Link className="text" to="/about">About</Link>*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}
        {/*<div className="column col-sm-3 col-md-1">*/}
          {/*{ authenticationState.isAuthenticated() && `${authenticationState.authAdmin!.first_name} ${authenticationState.authAdmin!.last_name}` }*/}
        {/*</div>*/}
      </div>
    )
  }

}