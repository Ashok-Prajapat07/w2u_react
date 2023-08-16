import React from "react";

function Advertisement() {
  return (
    <>
      <div className="container mt-5 top-home">
        <div
          className="row justify-content-center homestays"
          style={{ paddingTop: 30, paddingBottom: 20 }}
        >
          {/* Image Box */}
          <div className="col-md-10 text-center">
            <div className="image-box">
              {/* Left Image */}
              <img
                src="./LEFT_IMAGE.png"
                alt="Left Image"
                className="left-image img-fluid"
              />
              {/* Text next to the left image */}
              <div className="left-image-text">
                <p className="p1">
                  Coming To Udaipur &amp; Don’t
                  <br /> Know Where to Stay?
                </p>
                <p className="p2">
                  Top 10 Clean &amp; <br /> Hygienic Homestays
                </p>
                {/* Image Button with Centered Text */}
                <button className="btn btn-success Ram">Know more</button>
              </div>
              <div className="image-box-content">
                <div className="image-box-right">
                  <img
                    src="./right1.png"
                    alt="Image 3"
                    className="right-box-img1"
                  />
                  <img
                    src="./right2.png"
                    alt="Image 2"
                    className="right-box-img2"
                  />
                </div>
                <div className="image-box-single">
                  <img src="./right-singal.png" alt="Image 1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Advertisement;
