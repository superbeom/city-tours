import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData
  };

  _deleteTourData = id => {
    const { tours } = this.state;
    const newTours = tours.filter(tour => tour.id !== id);
    // this.setState({
    //   tours: newTours
    // });
    console.log("success");
  };

  render() {
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map(tour => (
          <Tour
            key={tour.id}
            tour={tour}
            deleteTourData={this._deleteTourData}
          />
        ))}
      </section>
    );
  }
}
