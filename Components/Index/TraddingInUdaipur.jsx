import React from "react";

function TraddingInUdaipur() {
  return (
    <>
      <div className="container-fluid ">
        <div
          className="row justify-content-center trending-content"
          style={{ paddingTop: 20, paddingBottom: 20 }}
        >
          <div className="col-md-12 text-center">
            <div className="trending2-line pb-2 d-flex justify-content-center">
              <div className="left-border"></div>
              <span className="trending2-text">
                <h1>Trending in Udaipur</h1>
              </span>
              <div className="right-border"></div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center d-flex">
          {/* First Image Box */}
          <div className="col-md-2 col-4 text-center">
            <img
              src="./Rectangle 2232.png"
              alt="Image 1"
              className="img-fluid custom-rounded pd trending1-image"
            />
            <h4 className="text-center pd2">Tourist Places</h4>
          </div>
          {/* Second Image Box */}
          <div className="col-md-2 col-4 text-center">
            <img
              src="./Rectangle 2234.png"
              alt="Image 1"
              className="img-fluid custom-rounded pd trending1-image"
            />
            <h4 className="text-center pd2">Wedding Destination</h4>
          </div>
          {/* Third Image Box */}
          <div className="col-md-2 col-4 text-center">
            <img
              src="./Rectangle 2237.png"
              alt="Image 2"
              className="img-fluid custom-rounded trending1-image"
            />
            <h4 className="text-center pd2">Food</h4>
          </div>
          {/* Fourth Image Box */}
          <div className="col-md-2 col-4 text-center">
            <img
              src="./Rectangle 2236.png"
              alt="Image 3"
              className="img-fluid custom-rounded pd trending1-image"
            />
            <h4 className="text-center pd2">Shopping Places</h4>
          </div>
          {/* Fifth Image Box */}
          <div className="col-md-2 col-4 text-center">
            <img
              src="./Rectangle 2235.png"
              alt="Image 4"
              className="img-fluid custom-rounded pd trending1-image"
            />
            <h4 className="text-center pd2">Udaipur News</h4>
          </div>
        </div>
      </div>
    </>
  );
}
export default TraddingInUdaipur;
