import React from "react";

function OurBlog() {
  return (
    <>
      <div className="container mt-1 our-blogs" style={{ paddingTop: 20 }}>
        <div className="trending-line pb-5">
          <h1>Our Blogs</h1>
        </div>
        <div className="row justify-content-evenly">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className=" card border-0 blog-card ">
              <div className="image3-box">
                <div className="image3-box-content">
                  <div className="image3-box-images">
                    <img
                      src="./right.jpg"
                      alt="Right Image"
                      className="custom-rounded img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="blog-content mt-3 mb-2">
                <div className="d-flex gap-4">
                  <h3>
                    Lorem ipsum dolor sit
                    <br /> amet, consectetur
                    <br /> adipiscing elit.{" "}
                  </h3>
                  <h6>
                    June <br /> 10, 2023
                  </h6>
                </div>
                <h6>
                  Ipsum dolor sit amet, consectetur adipi scing elit. Maecenas
                  pretium venenatis purus, at mattis urna pretium sit amet.
                </h6>
                <div className="read-more8">Read More</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className=" card border-0 blog-card">
              <div className="blog-content mb-3">
                <div className="d-flex gap-4">
                  <h3>
                    Lorem ipsum dolor sit
                    <br /> amet, consectetur
                    <br /> adipiscing elit.{" "}
                  </h3>
                  <h6>
                    June <br /> 10, 2023
                  </h6>
                </div>
                <h6>
                  Ipsum dolor sit amet, consectetur adipi scing elit. Maecenas
                  pretium venenatis purus, at mattis urna pretium sit amet.
                </h6>
                <div className="read-more8">Read More</div>
              </div>
              <div className="image3-box mb-2">
                <div className="image3-box-content">
                  <div className="image3-box-images">
                    <img
                      src="./cen.jpg"
                      alt="Middle Image"
                      className="custom-rounded img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className=" card border-0 blog-card">
              <div className="image3-box">
                <div className="image3-box-content">
                  <div className="image3-box-images">
                    <img
                      src="./right.jpg"
                      alt="Right Image"
                      className="custom-rounded img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="blog-content mt-3 mb-2">
                <div className="d-flex gap-4">
                  <h3>
                    Lorem ipsum dolor sit
                    <br /> amet, consectetur
                    <br /> adipiscing elit.{" "}
                  </h3>
                  <h6>
                    June <br /> 10, 2023
                  </h6>
                </div>
                <h6>
                  Ipsum dolor sit amet, consectetur adipi scing elit. Maecenas
                  pretium venenatis purus, at mattis urna pretium sit amet.
                </h6>
                <div className="read-more8">Read More</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-line-blogs d-flex justify-content-center">
        <img src="./border-line-blogs.png" alt="" />
      </div>
    </>
  );
}
export default OurBlog;
