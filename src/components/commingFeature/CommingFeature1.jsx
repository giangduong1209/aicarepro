import React from "react";
import Link from "next/link";
import commingFeatureData from "../../data/coming_feature.json";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import TimeCount2 from "../common/TimeCount2";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation, EffectFade]);
function CommingFeature1() {
  const featureSlider = {
    slidesPerView: "auto",
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    roundLengths: true,
    navigation: {
      nextEl: ".c-feature-prev1",
      prevEl: ".c-feature-next1",
    },

    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <section
      className="coming-feature pt-110 pb-110"
      id="coming-featured-assets"
    >
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
            <div className="section-title1">
              <h2>Coming Featured Assets</h2>
              {/* <p className="mb-0">
                Explore on the worlds best &amp; largest NFT marketplace with
                our beautiful NFT products. We want to be a part of your smile,
                success and future growth.
              </p> */}
            </div>
          </div>
        </div>
        <div className="row px-2">
          <Swiper {...featureSlider} className="swiper c-feature-slider1 mb-50">
            <div className="swiper-wrapper">
              {commingFeatureData.map((data) => {
                const { id, image, authorName, ehtPrice, title, category } =
                  data;
                return (
                  <SwiperSlide key={id} className="swiper-slide">
                    <div className="eg-card c-feature-card1 hover-shine">
                      <div className="auction-img">
                        <img src={image} alt="" />
                        <div className="auction-timer2 gap-3" id="timer7">
                          <TimeCount2 />
                        </div>
                        <div className="author-area2">
                          <div className="author-name">
                            <span>by @{authorName}</span>
                          </div>
                          <div className="author-emo">
                            <img
                              src="assets/images/icons/author-emo.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="c-feature-content">
                        <div className="c-feature-category">{category}</div>
                        <Link href="/auction-details">
                          <a>
                            <h5>{title}</h5>
                          </a>
                        </Link>
                        <p>Current Price : {ehtPrice}</p>
                        <div className="auction-card-bttm">
                          <Link href="/auction-details">
                            <a className="eg-btn btn--outline">View More</a>
                          </Link>
                          <div className="share-area">
                            <ul className="social-icons d-flex">
                              <li>
                                <a href="#">
                                  <i className="bx bxl-facebook" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="bx bxl-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="bx bxl-pinterest" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="bx bxl-instagram" />
                                </a>
                              </li>
                            </ul>
                            <div>
                              <Link href="#bet">
                                <a className="share-btn">
                                  <i className="bx bxs-share-alt" />
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
          <div className="slider-arrows c-feature-arrow text-center d-flex justify-content-start gap-lg-4 gap-3">
            <div
              className="c-feature-prev1 swiper-prev-arrow"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
            >
              <i className="bx bx-chevron-left" />
            </div>
            <div
              className="c-feature-next1 swiper-next-arrow"
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

export default CommingFeature1;
