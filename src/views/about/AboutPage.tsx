"use strict";

import React from "react";
import { inject, observer } from "mobx-react";
import { PageProps } from "../../definitions/PageProps";

const border = {
  marginLeft: '4%',
  marginRight: '4%',
  paddingTop: '.5%',
  paddingBottom: '.5%'
}
const title = {
  color: '#791500',
  fontweight: 'bold',
  fontSize: '240%'
}
const whitetext = {
  color: 'white',
  backgroundColor: '#791500'
}
const center = {
  textAlign: 'center'
}
const textcolor = {
  color: 'black'
}
const titlefooter = {
  fontweight: 'bold',
  fontSize: '240%',
  color:'white'
}


@inject("rootState")
@observer
export class AboutPage extends React.Component<PageProps> {

  componentDidMount() {
    this.props.rootState.navigationBarState.updateCurrentPage("about");
  }

  render() {
    return (
      <div style={textcolor}>
        <div className="color">
          <div style={border}>
            <h3 style={title}>About Dystonia</h3>
            <p>Dystonia is a neurological movement disorder that causes involuntary muscle contractions, which force the
              body into abnormal, and sometimes painful, movements or postures. Dystonia affects men, women and children
              of all ages and backgrounds and causes varying degrees of disability and pain, from mild to severe. It is
              the third most common movement disorder behind only Parkinson’s and Essential Tremor (estimates suggest that
              at least 300,000 – 500,000 people are afflicted in North America alone). There is presently no cure, but
              some treatment options exist and scientists around the world are actively pursuing research towards new
              therapies, and ultimately a cure. </p>
          </div>
        </div>
        <div className="color">
          <div style={border}>
            <h3 style={title}>About Cure Dystonia Now</h3>
            <p>Cure Dystonia Now is a public charitable organization that is run by volunteers
              and is working with researchers on cutting edge treatments and ultimately a cure for Dystonia. We are
              pleased to be working with several of the pre-eminent scientists in the field of Dystonia, who comprise our
              Medical and Scientific Advisory Council (MSAC). The MSAC conducts peer-review of research applications,
              sets the direction of research and makes recommendations to the Board for funding research. You can read
              about the research we have funded <a href="/research"> here</a></p>
          </div>
        </div>
        <div className="color">
          <div style={border}>
            <h3>CDN Org Dox &amp; Filings</h3>
            <p><strong>IRS Form 990</strong><br/>
              Form 990 is an annual reporting return that certain federally tax-exempt organizations must file with the
              Internal Revenue Service (IRS). It provides information on the filing organization’s mission, programs and
              finances.</p>
            <p><a href="Docs/IRS_Form_990_2016.pdf" target="_blank">Click here to view CDN’s most recent Form 990</a></p>
            <p><strong>By-Laws</strong></p>
            <p><a href="Docs/Cure Dystonia Now By-Laws.pdf" target="_blank">Click here to view CDN’s By-Laws</a></p>
            <p><strong>Conflict of Interest Policy</strong></p>
            <p><a href="Docs/CDN Conflict of Interest Policy.pdf" target="_blank">Click here to view CDN’s Conflict of
              Interest Policy</a><br/>
            </p>
          </div>
        </div>
        <div className="color">
          <div style={border}>
            <h3 style={title}>Medical and Scientific Advisory Council</h3>
            <p>The Medical and Scientific Advisory Council (MSAC) is comprised of pre-eminent scientists
              in the field of Dystonia. Members will conduct peer-review of research applications, set the directions of
              research and make recommendation to the Board for funding.</p>
            <div className="columns">
              <div className="column">
                <strong><a href="http://feinsteinneuroscience.org/about-us-2/staff-2/david-eidelberg" target="_blank">David Eidelberg, MD</a></strong><br/>
                The Feinstein Institute for Medical Research<br/>
                <br/>
              </div>
              <div className="column">
                <strong> <a href="http://nyulangone.org/doctors/1336157130/steven-j-frucht" target="_blank">Steven Frucht, MD</a></strong><br/>
                NYU Langone Medical Center<br/>
                <br/>
              </div>
              <div className="column">
                <strong><a href="http://www.pharm.emory.edu/main/index.php?status=faculty&pid=8" target="_blank">Ellen Hess, Ph.D.</a></strong><br/>
                Emory University School of Medicine<br/>
                <br/>
              </div>
              <div className="column">
                <strong><a href="http://www.emoryhealthcare.org/physicians/j/jinnah-ha.html" target="_blank">H.A. “Buz” Jinnah, MD, Ph.D.</a></strong><br/>
                Emory University School of Medicine<br/>
              </div>
              <div className="column">
                <a href="https://connects.catalyst.harvard.edu/profiles/profile/person/561" target="_blank"><strong><a href="https://connects.catalyst.harvard.edu/profiles/profile/person/561" target="_blank">D. Cristopher Bragg, Ph.D.</a></strong></a><br/>
                    Massachusetts General Hospital<br/>
                    Harvard Medical School<br/>
              </div>
            </div>
          </div>
        </div>
        <div className="color">
          <div style={border} >
            <h3 style={title}>Board of Directors</h3>
            <div className="columns">
              <div className="column">
                <p>Marc Miller<br/>Director, Co-President,
                Treasurer &amp; Secretary</p><br/>
              </div>
              <div className="column">
                <p>Robin Miller<br/>
                  Director, Co-President</p><br/>
              </div>
              <div className="column">
                <p>Sidney Miller<br/>
                  Director, Chairman</p><br/>
              </div>
            </div>
          </div>
        </div>
        <div className="color">
          <div style={border}>
            <h3 style={title}>Youth Advisory Board</h3>
            <div className="columns">
              <div className="column">
                • Julia Adwar<br></br>
                • Mikaela Adwar<br></br>
                • Kyle Basis<br></br>
                • Sydney Basis<br></br>
                • Brooke Bolnick<br></br>
                • Jeffrey Bolnick<br></br>
                • Casey Brand<br></br>
                • Amanda Braunstein<br></br>
                • Hallie Braunstein<br></br>
                • Andrew Brotman<br></br>
              </div>
              <div className="column">
                • Brendan Brotman<br></br>
                • Max Brotman<br></br>
                • Kelsey Clifford<br></br>
                • Allie Gold<br></br>
                • Rachel Gold<br></br>
                • Adam Katz<br></br>
                • Samantha Katz<br></br>
                • Jonah Landow<br></br>
                • Noah Landow<br></br>
                • Aiden Miller<br></br>
              </div>
              <div className="column">
                • Alex Miller<br></br>
                • Camryn Miller<br></br>
                • Jake Miller<br></br>
                • Jordyn Miller<br></br>
                • Justin Miller<br></br>
                • Lizzy Miller<br></br>
                • Riley Miller<br></br>
                • Parker Needleman<br></br>
                • Phoebe Palmyra<br></br>
                • Jacob Rosenberg<br></br>
              </div>
              <div className="column">
                • Jordan Rosenberg<br></br>
                • Joshua Rosenberg<br></br>
                • Bria Ryan<br></br>
                • Nicola Ryan<br></br>
                • Paul Ryan<br></br>
                • Aaron Shapiro<br></br>
                • Daniel Shapiro<br></br>
                • Noah Warren<br></br>
              </div>
            </div>
          </div>
        </div>
        <div className="color">
          <div style={border}>
            <h3 style={title}>Resources</h3>
            <p><a href="http://rarediseasesnetwork.epi.usf.edu/dystonia/index.htm" target="_blank">Dystonia Coalition</a></p>
            <p><a href="http://www.dystonia-foundation.org/" target="_blank">Dystonia Medical Research Foundation</a></p>
            <p><a href="https://www.ninds.nih.gov/" target="_blank">National Institute of Health (NIH) National Institute of Neurological Disorders and Stroke (NINDS)</a></p>
            <p><a href="http://www.dysphonia.org/" target="_blank">National Spasmodic Dysphonia Association</a></p>
            <p><a href="http://www.tylershope.org/Home/tabid/132/Default.aspx" target="_blank">Tyler’s Hope for a Dystonia Cure</a></p>
          </div>
        </div>
        <div id="page-bottom" style={whitetext}>
          <div style = {border}>
            <div className="columns">
              <div className="column">
                <h3 style={titlefooter}>Donations</h3>
                <p>Your gift to Cure Dystonia Now will fund research toward more and/or improved treatments, and
                  ultimately a cure, for Dystonia. We welcome and appreciate donations of any amount. Donations to Cure
                  Dystonia Now are tax deductible as allowable by law.</p>
                <a href="https://www.curedystonianow.org/donate">Click here to learn more.</a>
              </div>
              <div className="column"></div>
              <div className="column">
                <h3 style={titlefooter}>Contact Us</h3>
                <p>Cure Dystonia Now<br/>
                  201 Old Country Road, Suite 205<br/>
                  Melville, NY 11747<br/>
                  Office: (516) 584-4156<br/>
                  Email: <a href="mailto: info@curedystonianow.org">info@curedystonianow.org</a></p>
                <p><span id="siteseal"><script type="text/javascript"src="https://seal.godaddy.com/getSeal?sealID=fOeONxDy5ZAATTsaQ8Xg9hKttNEKc07qsgAiYjmXQyFD3JJc9kS"></script></span></p>
              </div>
            </div>
            <div id="footer" style={center}>
              &copy; 2018 <a href="index.html">Cure Dystonia Now</a> | <a href="sitemap.xml">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}