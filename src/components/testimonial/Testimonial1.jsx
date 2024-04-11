import React from "react";
import Link from "next/link";
import TestimonialData from "../../data/client_testimonial.json";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation]);
function Testimonial1({ sectionPadding }) {
  const testimonialData = {
    slidesPerView: "auto",
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    roundLengths: true,
    navigation: {
      nextEl: ".testi-prev1",
      prevEl: ".testi-next1",
    },

    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <section
      className={`${"testimonial-section"} ${sectionPadding}`}
      id="what-client-say"
    >
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
            <div className="section-title1">
              <h2>What Client Say</h2>
              <p className="mb-0">
                Dont belive me! Check what customer Saying about us ?
              </p>
            </div>
          </div>
        </div>
        <div className="row px-2">
          <Swiper
            {...testimonialData}
            className="swiper testimonial-slider mb-50"
          >
            <div className="swiper-wrapper">
              {TestimonialData.map((data) => {
                const { id, name, description, title, image } = data;
                return (
                  <SwiperSlide key={id} className="swiper-slide pb-3">
                    <div className="testimonial-item d-flex">
                      <div className="testimonial-img">
                        <img src={image} alt="" />
                      </div>
                      <div className="testimonial-content">
                        <h5>{title}</h5>
                        <p>{description}</p>
                        <div className="client-name">{name}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
          <div className="slider-arrows text-center d-flex justify-content-center gap-lg-4 gap-3">
            <div
              className="testi-prev1 swiper-prev-arrow"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
            >
              <i className="bx bx-chevron-left" />
            </div>
            <div
              className="testi-next1 swiper-next-arrow"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
            >
              <i className="bx bx-chevron-right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial1;
