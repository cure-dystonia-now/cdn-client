import React from "react";
import { inject, observer } from "mobx-react";

import { PagePropsGeneric } from "../../definitions/props/PageProps";
import { NavigationBarHelper } from "../../utilities/helpers/NavigationBarHelper";

@inject("pageDependencies")
@observer
export class AboutPage extends React.Component<PagePropsGeneric> {

  componentDidMount() {
    NavigationBarHelper.updatePageFromDependencies(this.props.pageDependencies, "About");
  }

  render() {
    return (
      <div id="aboutPage">
        <h1>About Cure Dystonia Now</h1>
        <div className="about-card">
          <details className="accordion" open>
            <summary className="accordion-header">
              <i className="icon icon-arrow-right mr-1"/>
              About Dystonia
            </summary>
            <div className="accordion-body">
              Dystonia is a neurological movement disorder that causes involuntary muscle contractions, which force the
              body into abnormal, and sometimes painful, movements or postures. Dystonia affects men, women and children
              of all ages and backgrounds and causes varying degrees of disability and pain, from mild to severe. It is
              the third most common movement disorder behind only Parkinson’s and Essential Tremor (estimates suggest
              that at least 300,000 – 500,000 people are afflicted in North America alone). There is presently no cure,
              but some treatment options exist and scientists around the world are actively pursuing research towards new
              therapies, and ultimately a cure.
            </div>
          </details>
          <div className="divider"/>
          <details className="accordion">
            <summary className="accordion-header">
              <i className="icon icon-arrow-right mr-1"/>
              About Cure Dystonia Now
            </summary>
            <div className="accordion-body">
              Cure Dystonia Now is a public charitable organization that is run by volunteers and is working with
              researchers on cutting edge treatments and ultimately a cure for Dystonia. We are pleased to be working
              with several of the pre-eminent scientists in the field of Dystonia, who comprise our Medical and Scientific
              Advisory Council (MSAC). The MSAC conducts peer-review of research applications, sets the direction of
              research and makes recommendations to the Board for funding research. You can read about the research we have funded here.
            </div>
          </details>
          <div className="divider"/>
          <details className="accordion">
            <summary className="accordion-header">
              <i className="icon icon-arrow-right mr-1"/>
              Cure Dystonia Now - Documents and Filings
            </summary>
            <div className="accordion-body">
              Form 990 is an annual reporting return that certain federally tax-exempt organizations must file with the Internal Revenue Service (IRS). It provides information on the filing organization’s mission, programs and finances.
              <br/><br/>
              <a target="_blank" href="http://www.curedystonianow.org/Docs/IRS_Form_990_2017.pdf">IRS Form 990</a>
              <br/><br/>
              <a target="_blank" href="http://www.curedystonianow.org/Docs/Cure%20Dystonia%20Now%20By-Laws.pdf">By-Laws</a>
              <br/><br/>
              <a target="_blank" href="http://www.curedystonianow.org/Docs/CDN%20Conflict%20of%20Interest%20Policy.pdf">Conflict of Interest Policy</a>
            </div>
          </details>
          <div className="divider"/>
          <details className="accordion">
            <summary className="accordion-header">
              <i className="icon icon-arrow-right mr-1"/>
              Medical and Scientific Advisory Council
            </summary>
            <div className="accordion-body msac-body">
              <p>
                The Medical and Scientific Advisory Council (MSAC) is comprised of pre-eminent scientists in the field of Dystonia.
                Members will conduct peer-review of research applications, set the directions of research and make recommendation to the Board for funding.
              </p>
              <a href="http://feinsteinneuroscience.org/about-us-2/staff-2/david-eidelberg">David Eidelberg, MD</a>
              <h5>The Feinstein Institute for Medical Research</h5>
              <a href="http://nyulangone.org/doctors/1336157130/steven-j-frucht">Steven Frucht, MD</a>
              <h5>NYU Langone Medical Center</h5>
              <a href="http://www.pharm.emory.edu/main/index.php?status=faculty&pid=8">Ellen Hess, Ph.D.</a>
              <h5>Emory University School of Medicine</h5>
              <a href="http://www.emoryhealthcare.org/physicians/j/jinnah-ha.html">H.A. “Buz” Jinnah, MD, Ph.D.</a>
              <h5>Emory University School of Medicine</h5>
              <a href="http://feinsteinneuroscience.org/about-us-2/staff-2/david-eidelberg">D. Cristopher Bragg, Ph.D.</a>
              <h5>Massachusetts General Hospital</h5>
              <h5>Harvard Medical School</h5>
            </div>
          </details>
          <div className="divider"/>
          <details className="accordion">
            <summary className="accordion-header">
              <i className="icon icon-arrow-right mr-1"/>
              Board of Directors
            </summary>
            <div className="accordion-body board-body">
              <h4>Marc Miller</h4>
              <h5>Director, Co-President, Treasurer & Secretary</h5>
              <br/>
              <h4>Robin Miller</h4>
              <h5>Director, Co-President</h5>
              <br/>
              <h4>Sidney Miller</h4>
              <h5>Director, Chairman</h5>
            </div>
          </details>
        </div>
      </div>
    );
  }

}