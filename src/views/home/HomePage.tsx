"use strict";

import React from "react";
import {inject, observer} from "mobx-react";
import {PageProps} from "../../definitions/PageProps";
import bind from "bind-decorator";
// import {NavigationBar} from "../../components/navigation/NavigationBar";

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
export class HomePage extends React.Component<PageProps> {

  @bind
  flipButton() {
    const { rootState } = this.props;
    const { homeState }  = rootState;
    homeState.flipLoading();
  }

  componentDidMount() {
    this.props.rootState.navigationBarState.updateCurrentPage("home");
  }

  render() {
    const loadingText = this.props.rootState.homeState.isLoading ? "yes" : "no";
    return (
      <div style={textcolor}>
        {/*<NavigationBar rootState={this.props.rootState}/>*/}
        <p>Loading? <b>{loadingText}</b></p>
        <button onClick={this.flipButton}>flip</button>
        <p>This is the about page</p>
        <div className="color" style={altcolor}>
            <div style = {border}>
            <h3 style={title}>Cure dystonia now inc.</h3>
            <p>is a <a href="IRS Approval of 501(c)(3) Status.pdf" target="_blank">non-profit 501(c)(3) </a> charitable
              foundation committed to advancing research for more and/or improved treatments, and ultimately a cure, for
                Dystonia.</p>
            </div>
          </div>
        <div className="color">
          <div style = {border}>
            <h3 style={title}>Treatment for Dystonia</h3>
            <p>Some forms of dystonia are believed to be genetic, but the cause for the majority of cases is not known. It could be something that happened to the brain, like exposure to birth injury, infection, or
            chemical. Currently, there are no medications or treatments to prevent dystonia or slow its progression, nor
            is there a cure. There are several treatment options that can ease some of the symptoms of dystonia,
            including: </p>
            <div className="columns" style={colstyle}>
                <div className="column">
                  <p >Medications, including several classes of drugs that affect
                  different neurotransmitters may be effective for various forms of dystonia. </p>
                </div>
              <div className="column">
                <p> Botulinum toxin (botox) injections are
                often the most effective treatment of focal dystonias. Botox injected into affected muscles prevents
                muscle contractions and can provide temporary improvement in the abnormal postures and movements that
                characterize dystonia. First used to treat blepharospasm, such injections are now widely used for
                treating other focal dystonias. </p>
              </div>
              <div className="column">
                <p>Deep Brain Stimulation, or DBS, which involves implanting
                small electrodes that are connected to a pulse generator into specific brain regions that control
                movement. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="color" style={altcolor}>
          <div style = {border}>
            <h3 style={title}>Forms of Dystonia</h3>
            <p>Although there are multiple forms of dystonia and the symptoms of these forms may outwardly
            appear quite different, the element that all forms share is the repetitive, patterned, and often twisting
            involuntary muscle contractions. Forms of dystonia include: </p>
            <div className="columns" style={colstyle}>
              <div className="column">
                <p>Cervical Dystonia</p></div>
              <div className="column">
                <p>Blepharospasm and Craniofacial Dystonia</p></div>
              <div className="column">
                <p>Spasmodic Dystonia</p></div>
              <div className="column">
                <p>Limb Dystonia</p></div>
            </div>
            <p>* Source: DMRF, Dystonia Coalition, Bachman Strauss, Tyler’s Hope and NINDS</p>
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