import React from "react";
import bind from "bind-decorator";
import { inject, observer } from "mobx-react";

import { PagePropsGeneric } from "../../definitions/props/PageProps";
import { NavigationBarHelper } from "../../utilities/helpers/NavigationBarHelper";
import { Link } from "react-router-dom";

@inject("pageDependencies")
@observer
export class HomePage extends React.Component<PagePropsGeneric> {

  @bind
  flipButton() {
    const { stateRegistry } = this.props.pageDependencies;
    const { homeState }  = stateRegistry;
    homeState.flipLoading();
  }

  componentDidMount() {
    NavigationBarHelper.updatePageFromDependencies(this.props.pageDependencies, "home");
  }

  render() {
    return (
      <div id="homePage">
        <div className="columns">
          <div className="column col-sm-12 col-8 left-col">
            <div className="card">
              <h1>Cure Dystonia Now</h1>
              <p>
                Dystonia is a movement disorder that causes involuntary, and sometimes painful, muscle contractions,
                which force the body into repetitive movements and/or awkward, irregular postures.
              </p>
              <p>
                Dystonia may affect a single body area or be generalized throughout multiple muscle groups.
                Dystonia affects men, women, and children of all ages and backgrounds. Estimates suggest that as many
                as 300,000 to 500,000 people in North America are affected. Dystonia causes varying degrees of
                disability and pain, from mild to severe.
              </p>
              <p>
                Cure Dystonia Now is a public charitable organization that is run by volunteers and is working with
                researchers on cutting edge treatments and ultimately a cure for Dystonia. You can read about the research we have funded <Link to="/research">here</Link>.
              </p>
            </div>
          </div>
          <div className="column col-sm-12 col-4 right-col">
            <Link to="/donate" className="donate-button">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    );
  }

}