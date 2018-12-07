import React from "react";
import { inject, observer } from "mobx-react";

import { PagePropsGeneric } from "../../definitions/props/PageProps";
import { NavigationBarHelper } from "../../utilities/helpers/NavigationBarHelper";
import { Research } from "../../definitions/types/Research";

@inject("pageDependencies")
@observer
export class ResearchPage extends React.Component<PagePropsGeneric> {

  async componentDidMount() {
    NavigationBarHelper.updatePageFromDependencies(this.props.pageDependencies, "research");
    const { researchController } = this.props.pageDependencies.controllerRegistry;
    await researchController.populateResearchEntries();
  }


  private getAccordionBody(research: Research) {
    return (
      <div className="research-content" key={research.id}>
        <h1>{research.title}</h1>
        <div className="columns">
          <div className="column col-6 col-sm-12">
            <h3>{research.author}</h3>
          </div>
          <div className="column col-6 col-sm-12" style={{textAlign: "right"}}>
            <h3>{research.association}</h3>
          </div>
        </div>
        <div className="description" dangerouslySetInnerHTML={{ __html: research.description }}/>
      </div>
    )
  }

  private getEntryAccordions() {
    const { researchState } = this.props.pageDependencies.stateRegistry;

    const years = researchState.entryYears;
    const accordions = [];
    for (let i = 0; i < years.length; i++) {
      const year = years[i];
      accordions.push(
        <div className="accordion" key={year}>
          <input type="checkbox" id={`research-accordion-${year}`} name="accordion-checkbox" hidden/>
          <label className="accordion-header" htmlFor={`research-accordion-${year}`}>
            <i className="icon icon-arrow-right mr-1"/>&nbsp;&nbsp;{ year }</label>
          <div className="accordion-body">
            { researchState.getResearchEntriesByYear(year).map(research => this.getAccordionBody(research))}
          </div>
        </div>
      )
    }

    return accordions;
  }

  render() {
    return (
      <div id="researchPage">
        <div className="columns">
          <div className="column col-3 col-md-4 col-sm-12">
            <div className="info-col">
              <h1>Research Grants</h1>
              <br/>
              <p>
                Cure Dystonia Now provided research grants to promising studies and explorations... Cure Dystonia Now is a public charitable organization that is run by volunteers and is working with researchers on cutting edge treatments and ultimately a cure for Dystonia.
              </p>
              <br/>
              <p>
                We are pleased to be working with several of the pre-eminent scientists in the field of Dystonia, who comprise our Medical and Scientific Advisory Council (MSAC). The MSAC conducts peer-review of research applications, sets the direction of research and makes recommendations to the Board for funding research.
              </p>
            </div>
          </div>
          <div className="column col-9 col-md-8 col-sm-12">
            <div className="research-col">
              { this.getEntryAccordions() }
            </div>
          </div>
        </div>
      </div>
    );
  }

}