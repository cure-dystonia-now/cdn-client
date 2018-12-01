import React from "react";

export class ImageCarousel extends React.Component {

  render() {
    return (
      <div className="carousel">
        <input className="carousel-locator" id="slide-1" type="radio" name="carousel-radio" hidden defaultChecked/>
        <input className="carousel-locator" id="slide-2" type="radio" name="carousel-radio" hidden/>

        <div className="carousel-container">
          <figure className="carousel-item">
            <label className="item-prev btn btn-action btn-lg" htmlFor="slide-2">
              <i className="icon icon-arrow-left"/></label>
            <label className="item-next btn btn-action btn-lg" htmlFor="slide-2">
              <i className="icon icon-arrow-right"/></label>
            <img className="img-responsive rounded" src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" alt="macOS Yosemite Wallpaper"/>
          </figure>
          <figure className="carousel-item">
            <label className="item-prev btn btn-action btn-lg" htmlFor="slide-1">
              <i className="icon icon-arrow-left"/>
            </label>
            <label className="item-next btn btn-action btn-lg" htmlFor="slide-1">
              <i className="icon icon-arrow-right"/>
            </label>
            <img className="img-responsive rounded" src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" alt="macOS Yosemite Wallpaper"/>
          </figure>
        </div>
        <div className="carousel-nav">
          <label className="nav-item text-hide c-hand" htmlFor="slide-1">1</label>
          <label className="nav-item text-hide c-hand" htmlFor="slide-2">2</label>
        </div>
      </div>
    )
  }

}