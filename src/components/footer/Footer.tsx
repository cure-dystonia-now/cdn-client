import React from "react";

export class Footer extends React.Component {

  render() {
    return (
      <div id="footer" className="columns col-oneline">
          <div className="column col-sm-12 col-6">
            <div className="contact">
              <h1>Cure Dystonia Now</h1>
              <p>201 Old Country Road, Suite 205</p>
              <p>Melville, NY 11747</p>
              <div className="divider-custom"/>
              <p>516-584-4156</p>
              <p>info@curedystonianow.org</p>
            </div>
          </div>
          <div className="column col-6">
          </div>
      </div>
    )
  }

}