import React from "react";
import bind from "bind-decorator";
import { inject, observer } from "mobx-react";

import { PageProps } from "../../definitions/PageProps";
import { ImageCarousel } from "../../components/carousels/ImageCarousel";
import { NavigationBarHelper } from "../../utilities/helpers/NavigationBarHelper";

@inject("pageDependencies")
@observer
export class HomePage extends React.Component<PageProps> {

  @bind
  flipButton() {
    const { stateRegistry } = this.props.pageDependencies;
    const { homeState }  = stateRegistry;
    homeState.flipLoading();
  }

  componentDidMount() {
    NavigationBarHelper.updatePageFromDependencies(this.props.pageDependencies, "Cure Dystonia Now");
  }

  render() {
    return (
      <div className="container">
        <div className="columns card-wrapper">
          <div className="column col-sm-12 col-7">
            <div className="card">
              <h1>Hello</h1>
              <ImageCarousel/>
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