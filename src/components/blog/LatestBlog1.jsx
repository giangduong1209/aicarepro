import React from "react";
import blogData from "../../data/latest_blog.json";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation, EffectFade]);
function LatestBlog1() {
  const blogSlider = {
    slidesPerView: "auto",
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    roundLengths: true,
    navigation: {
      nextEl: ".blog-prev1",
      prevEl: ".blog-next1",
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
    <section className="blog-section pt-110 pb-110" id="latest-blog">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
            <div className="section-title2">
              <h2>Latest Blog</h2>
              <p className="mb-0">
                Explore on the worlds best &amp; largest NFT marketplace with
                our beautiful NFT products. We want to be a part of your smile,
                success and future growth.
              </p>
            </div>
          </div>
        </div>
        <div className="row px-2">
          <Swiper {...blogSlider} className="swiper blog-slider mb-50">
            <div className="swiper-wrapper">
              {blogData.slice(0, 3).map((data) => {
                const {
                  id,
                  image,
                  title,
                  category,
                  date,
                  authorName,
                  comment,
                } = data;
                return (
                  <SwiperSlide key={id} className="swiper-slide">
                    <div className="blog-card">
                      <div className="blog-img">
                        <img src={image} alt="" />
                      </div>
                      <div className="blog-content">
                        <p>{category}</p>
                        <h3>
                          <Link href="/blog-details">
                            <a>{title}</a>
                          </Link>
                        </h3>
                        <div className="blog-date-area">
                          <i className="bi bi-stopwatch" />
                          <span> {`${date}, By ${authorName}`}</span>
                        </div>
                        <div className="b-card-bottom">
                          <Link href="/blog-details">
                            <a className="eg-btn btn-half-fill">
                              {" "}
                              <span>Read</span> more
                              <i className="bi bi-arrow-right" />
                            </a>
                          </Link>
                          <Link href="#">
                            <a className="blog-comment">{comment} Comment</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
          <div className="slider-arrows blog-arrow text-center d-flex justify-content-start gap-lg-4 gap-3">
            <div
              className="blog-prev1 swiper-prev-arrow"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
            >
              <i className="bx bx-chevron-left" />
            </div>
            <div
              className="blog-next1 swiper-next-arrow"
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

export default LatestBlog1;
