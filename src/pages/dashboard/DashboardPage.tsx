import React from "react";
import { PagePropsGeneric } from "../../definitions/props/PageProps";
import { Link, Route } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { DashboardSubView } from "./DashboardSubView";

@inject("pageDependencies")
@observer
export class DashboardPage extends React.Component<PagePropsGeneric> {

  render(): React.ReactNode {
    return (
      <div id="dashboardPage">
        <h1>Administrator Dashboard</h1>
        <div className="columns">
          <div className="column col-3 col-sm-12">
            <ul className="menu">
              <li className="divider" data-content="CONTENT MANAGEMENT"/>
              <li className="menu-item">
                <Link to={`${this.props.match.url}/events`}>
                  <i className="icon icon-message"/>
                  &nbsp; Events
                </Link>
              </li>
              <li className="menu-item">
                <Link to={`${this.props.match.url}/research`}>
                  <i className="icon icon-message"/>
                  &nbsp; Research
                </Link>
              </li>
              {/*<li className="menu-item">*/}
                {/*<Link to={`${this.props.match.url}/email`}>*/}
                  {/*<i className="icon icon-mail"/>*/}
                  {/*&nbsp; Email Blast*/}
                {/*</Link>*/}
              {/*</li>*/}
              <li className="divider" data-content="ANALYTICS"/>
              <li className="menu-item">
                <Link to={`${this.props.match.url}/ticket-analytics`}>
                  <i className="icon icon-link"/>
                  &nbsp; Ticket Sales
                </Link>
              </li>
              <li className="menu-item">
                <Link to={`${this.props.match.url}/donation-analytics`}>
                  <i className="icon icon-link"/>
                  &nbsp; Donations
                </Link>
              </li>
              <li className="divider"/>
              <li className="menu-item">
                <Link to={`${this.props.match.url}/donor-registry/1`}>
                  <i className="icon icon-people"/>
                  &nbsp; Donor Registry
                </Link>
              </li>
              <li className="divider"/>
              <li className="menu-item">
                <Link to={`/logout`}>
                  <i className="icon icon-shutdown"/>
                  &nbsp; Logout
                </Link>
              </li>
            </ul>
          </div>
          <div className="column col-9 col-sm-12">
            <div className="subview">
              <Route path={`${this.props.match.url}/:subView`} component={DashboardSubView}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

}