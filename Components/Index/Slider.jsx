import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Marquee from "react-fast-marquee";

function Slider() {
  return (
    <>
      <div class="carousel-container mt-0">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div class="carousel-item top-carousel active">
              <img src="./barner2.png" class="d-block w-100" alt="Image 1" />
              <div class="carousel-caption">
                <div class="caption-text">
                  <h1 class="carousel-text">
                    Explore the Beauty of Historic Culture and
                    <br />
                    Amazing Lakes of Udaipur
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="carousel-item top-carousel active">
              <img src="./barner2.png" class="d-block w-100" alt="Image 1" />
              <div class="carousel-caption">
                <div class="caption-text">
                  <h1 class="carousel-text">
                    Explore the Beauty of Historic Culture and <br /> Amazing
                    Lakes of Udaipur
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Marquee>
        {" "}
        Breaking News: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed id rutrum orci, cursus vulputate dui. In porta congue dapibus.
        Breaking News: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed id rutrum orci, cursus vulputate dui. In porta congue dapibus.
      </Marquee>
    </>
  );
}
export default Slider;
