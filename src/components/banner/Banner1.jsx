import React, { useState } from "react";
import TimeCounnt from "../common/TimeCounnt";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation, EffectFade]);
function Banner1() {
  const [isOpen, setOpen] = useState(false);
  const bannerSlider1 = {
    slidesPerView: "auto",
    speed: 1000,
    spaceBetween: 0,
    loop: true,
    effect: "fade",
    centeredSlides: true,
    roundLengths: true,
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },
    direction: "horizontal",
    pagination: {
      clickable: true,
      el: ".swiper-pagination",
    },
  };
  return (
    <section className="banner-section">
      <Swiper {...bannerSlider1} className="swiper banner1 banner-section">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide position-relative">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-lg-6 bg--primary">
                  <div className="banner-content">
                    <h1>
                      Discover the most advanced Gymnastic NFT Marketplace
                    </h1>
                    <p>
                      Browse and trade NFTs from the worlds of sport and gym
                      lover.
                    </p>
                    <h4>Current: 1.569 BNB</h4>
                    <h5>$ 3,459.32</h5>
                    <Link href="https://explore.aicarepro.com/">
                      <a className="banner-btn">Explore</a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 d-lg-block d-none">
                  <div className="banner-video-area d-flex flex-column justify-content-lg-start justify-content-center">
                    {/* <div className="banner-timer d-flex flex-row align-items-center justify-content-center">
                      <h5>Time Remaining</h5>
                      <h3>
                        <TimeCounnt />
                      </h3>
                    </div> */}
                    <img
                      src="assets/images/banner/banner-dot.png"
                      className="bg-dot"
                      alt=""
                    />
                    <img src="assets/images/banner/banner-vdobg.png" alt="" />
                    {/* <div
                      className="video-play"
                      onClick={() => setOpen(true)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="video-open video-icon">
                        <i className="bx bx-play" />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <ul className="banner-social-icon">
              <li>
                <a
                  // target={"_blank"}
                  href="#"
                >
                  <i className="bx bxl-twitter" />
                </a>
              </li>
              <li>
                <a
                  // target={"_blank"}
                  href="#"
                >
                  <i className="bx bxl-telegram" />
                </a>
              </li>
              <li>
                <a
                  // target={"_blank"}
                  href="#"
                >
                  <i className="bx bxl-discord" />
                </a>
              </li>
              <li>
                <a
                  // target={"_blank"}
                  href="#"
                >
                  <i className="bx bxl-linkedin" />
                </a>
              </li>
            </ul>
            <img
              src="assets/images/banner/left-bttm-vctr.svg"
              className="left-bttm-vctr"
              alt=""
            />
            <img
              src="assets/images/banner/bannr-bottm-right.svg"
              className="right-bttn-vctr"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide position-relative">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-lg-6 bg--primary">
                  <div className="banner-content">
                    <h1>Discover, The Largest NFT Marketplace 02</h1>
                    <p>
                      Korem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspe ndisse gravida luctus tempus. Mauris eu diam vel
                      tellus{" "}
                    </p>
                    <h4>Current: 1.569 BNB</h4>
                    <h5>$ 3,459.32</h5>
                    <Link href="https://explore.aicarepro.com/">
                      <a className="banner-btn">Explore</a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 d-lg-block d-none">
                  <div className="banner-video-area d-flex flex-column justify-content-lg-start justify-content-center">
                    {/* <div className="banner-timer d-flex flex-row align-items-center justify-content-center">
                      <h5>Time Remaining</h5>
                      <h3>
                        <TimeCounnt />
                      </h3>
                    </div> */}
                    <img
                      src="assets/images/banner/banner-dot.png"
                      className="bg-dot"
                      alt=""
                    />
                    <img src="assets/images/banner/banner-vdobg.png" alt="" />
                    {/* <div
                      className="video-play"
                      onClick={() => setOpen(true)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="video-open video-icon">
                        <i className="bx bx-play" />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <ul className="banner-social-icon">
              <li>
                <a
                  // target={"_blank"}
                  href="#"
                >
                  <i className="bx bxl-twitter" />
                </a>
              </li>
              <li>
                <a
                  // target={"_blank"}
                  href="#"
                >
                  <i className="bx bxl-telegram" />
                </a>
              </li>
              <li>
                <a
                  // target={"_blank"}
                  href="#"
                >
                  <i className="bx bxl-discord" />
                </a>
              </li>
              <li>
                <a
                  // target={"_blank"}
                  href="#"
                >
                  <i className="bx bxl-linkedin" />
                </a>
              </li>
            </ul>
            <img
              src="assets/images/banner/left-bttm-vctr.svg"
              className="left-bttm-vctr"
              alt=""
            />
            <img
              src="assets/images/banner/bannr-bottm-right.svg"
              className="right-bttn-vctr"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide position-relative">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-lg-6 bg--primary">
                  <div className="banner-content">
                    <h1>Discover, The Largest NFT Marketplace 03</h1>
                    <p>
                      Korem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspe ndisse gravida luctus tempus. Mauris eu diam vel
                      tellus{" "}
                    </p>
                    <h4>Current: 1.569 BNB</h4>
                    <h5>$ 3,459.32</h5>
                    <Link href="https://explore.aicarepro.com/">
                      <a className="banner-btn">Explore</a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 d-lg-block d-none">
                  <div className="banner-video-area d-flex flex-column justify-content-lg-start justify-content-center">
                    {/* <div className="banner-timer d-flex flex-row align-items-center justify-content-center">
                      <h5>Time Remaining</h5>
                      <h3>
                        <TimeCounnt />
                      </h3>
                    </div> */}
                    <img
                      src="assets/images/banner/banner-dot.png"
                      className="bg-dot"
                      alt=""
                    />
                    <img src="assets/images/banner/banner-vdobg.png" alt="" />
                    {/* <div
                      className="video-play"
                      onClick={() => setOpen(true)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="video-open video-icon">
                        <i className="bx bx-play" />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <ul className="banner-social-icon">
              <li>
                <a
                  // target={"_blank"}
                  href="#"
                >
                  <i className="bx bxl-twitter" />
                </a>
              </li>
              <li>
                <a
                  // target={"_blank"}
                  href="#"
                >
                  <i className="bx bxl-telegram" />
                </a>
              </li>
              <li>
                <a
                  // target={"_blank"}
                  href="#"
                >
                  <i className="bx bxl-discord" />
                </a>
              </li>
              <li>
                <a
                  // target={"_blank"}
                  href="#"
                >
                  <i className="bx bxl-linkedin" />
                </a>
              </li>
            </ul>
            <img
              src="assets/images/banner/left-bttm-vctr.svg"
              className="left-bttm-vctr"
              alt=""
            />
            <img
              src="assets/images/banner/bannr-bottm-right.svg"
              className="right-bttn-vctr"
              alt=""
            />
          </SwiperSlide>
        </div>
      </Swiper>
      {/* <div className="swiper-pagination d-flex flex-column align-items-center justify-content-center gap-4" /> */}
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="TboWOSW7qCI"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </section>
  );
}

export default Banner1;
