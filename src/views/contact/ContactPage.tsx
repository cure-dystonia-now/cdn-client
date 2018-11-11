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
const colstyle = {
  fontSize: '90%',
  fontWeight: 'bold'
};
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
const altcolor = {
  backgroundColor: 'rgba(18, 22, 93, 0.5)'
}
const titlefooter = {
  fontweight: 'bold',
  fontSize: '240%',
  color:'white'
}


@inject("rootState")
@observer
export class ContactPage extends React.Component<PageProps> {

  componentDidMount() {
    this.props.rootState.navigationBarState.updateCurrentPage("contact");
  }

  render() {
    return (
      <div>
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