import React from "react";
import { PagePropsGeneric } from "../../definitions/props/PageProps";
import { Link, Route } from "react-router-dom";

export class DashboardPage extends React.Component<PagePropsGeneric> {

  render(): React.ReactNode {
    return (
      <div id="dashboardPage">
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
                <Link to={`${this.props.match.url}/events`}>
                  <i className="icon icon-message"/>
                  &nbsp; Research
                </Link>
              </li>
              <li className="menu-item">
                <Link to={`${this.props.match.url}/events`}>
                  <i className="icon icon-mail"/>
                  &nbsp; Email Blast
                </Link>
              </li>
              <li className="divider" data-content="ANALYTICS"/>
              <li className="menu-item">
                <Link to={`${this.props.match.url}/events`}>
                  <i className="icon icon-link"/>
                  &nbsp; Ticket Sales
                </Link>
              </li>
              <li className="menu-item">
                <Link to={`${this.props.match.url}/events`}>
                  <i className="icon icon-link"/>
                  &nbsp; Donations
                </Link>
              </li>
              <li className="divider"/>
              <li className="menu-item">
                <Link to={`${this.props.match.url}/events`}>
                  <i className="icon icon-shutdown"/>
                  &nbsp; Logout
                </Link>
              </li>
            </ul>
          </div>
          <div className="column col-9 col-sm-12">
            <Route exact path={this.props.match.url} render={() => (<h4>Please pick</h4>)}/>
          </div>
        </div>
      </div>
    )
  }

}