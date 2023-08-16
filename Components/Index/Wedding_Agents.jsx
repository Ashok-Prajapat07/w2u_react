import React from "react";

function WeddingAgents() {
  return (
    <>
      <div className="container-fluid ash ">
        <div
          className="row justify-content-start wedding-agents"
          style={{
            marginTop: 40,
            marginBottom: 60,
            left: "0%",
            position: "relative",
          }}
        >
          <div className="trending2-line pb-2 d-flex justify-content-center">
            <div className="left-border"></div>
            <span className="trending2-text">
              <h1>Wedding Agents</h1>
            </span>
            <div className="right-border"></div>
          </div>
          {/* Image and left side content */}
          <div className="col-12 image-left-content1">
            <div className=" image-container1">
              <img
                className="guide-image img-fluid"
                style={{ width: "30rem", height: "auto" }}
                alt=""
                src="./keen.png"
              />
            </div>
            <div className="left-content1 col-lg-6">
              <h4 className="venture-name">Name of their Venture</h4>
              <h6 className="agent-name">Name of Agent</h6>
              <h6 className="contact-number">Contact No.</h6>
              <p className="venture-details">
                This is some text on the left side of the image. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Nulla scelerisque
                enim nec augue lobortis feugiat. Sed non ultrices arcu. Duis ac
                blandit tellus. Nunc tristique tellus vitae mauris vulputate, et
                convallis ligula fringilla.
              </p>
              {/* Read more link */}
              <a href="#" className="view-more">
                View More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WeddingAgents;
