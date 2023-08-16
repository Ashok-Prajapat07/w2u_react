import React from "react";

function BloggersAndInfulencers(){
return(
    <>
    <div className="container mt-1" style={{ paddingTop: 20 }}>
  <div className="trending-line pb-5">
    <h1>Bloggers &amp; Influencers</h1>
  </div>
  <div className="row justify-content-center">
    <div className="col-md-6 col-lg-4 mb-4">
      <div className=" card border-0  ">
        <div className="blog-content mb-3">
          <h4>Insta Handle Name</h4>
          <h4>Blogger Original Name</h4>
          <h6>
            Ipsum dolor sit amet, consectetur adipi scing elit. Maecenas pretium
            venenatis purus, at mattis urna (About them)
          </h6>
          <div className="read-more8">Read More</div>
        </div>
        <div className="image3-box mb-2">
          <div className="image3-box-content">
            <div className="image3-box-images">
              <img
                src="./boy.png"
                alt="Middle Image"
                className="custom-rounded img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 mb-4">
      <div className=" card border-0  ">
        <div className="image3-box">
          <div className="image3-box-content">
            <div className="image3-box-images">
              <img
                src="./boy.png"
                alt="Left Image"
                className="custom-rounded img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="blog-content mt-3 mb-2">
          <h4>Insta Handle Name</h4>
          <h4>Blogger Original Name</h4>
          <h6>
            Ipsum dolor sit amet, consectetur adipi scing elit. Maecenas pretium
            venenatis purus, at mattis urna (About them)
          </h6>
          <div className="read-more8">Read More</div>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 mb-4">
      <div className=" card border-0  ">
        <div className="blog-content mb-3">
          <h4>Insta Handle Name</h4>
          <h4>Blogger Original Name</h4>
          <h6>
            Ipsum dolor sit amet, consectetur adipi scing elit. Maecenas pretium
            venenatis purus, at mattis urna (About them)
          </h6>
          <div className="read-more8">Read More</div>
        </div>
        <div className="image3-box mb-2">
          <div className="image3-box-content">
            <div className="image3-box-images">
              <img
                src="./boy.png"
                alt="Right Image"
                className="custom-rounded img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
)
}
export default BloggersAndInfulencers;