import React, { useState } from "react";
import ModalVideo from "react-modal-video";
function Banner2() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="banner2-section position-relative">
      <img
        src="assets/images/banner/banner-angle.svg"
        className="banner-angle"
        alt=""
      />
      <img
        src="assets/images/banner/banner-angle.svg"
        className="banner-angle2"
        alt=""
      />
      <img
        src="assets/images/banner/banner-star1.svg"
        className="banner-star1"
        alt=""
      />
      <img
        src="assets/images/banner/banner-star2.svg"
        className="banner-star2"
        alt=""
      />
      <img
        src="assets/images/banner/banner-star2.svg"
        className="banner-star3"
        alt=""
      />
      <img
        src="assets/images/banner/banner-circle.svg"
        className="banner-circle"
        alt=""
      />
      <img
        src="assets/images/banner/banner-circle2.svg"
        className="banner-circle2"
        alt=""
      />
      3
      <div className="swiper banner2">
        <div className="swiper-wrapper">
          <div className="swiper-slide position-relative">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-11 text-center">
                  <div className="banner2-content-wrapper">
                    <div className="banner2-video">
                      <div className="wrapper">
                        <div className="video-pluse">
                          <span />
                          <span />
                          <span />
                          <div
                            onClick={() => setOpen(true)}
                            style={{ cursor: "pointer" }}
                            className="video-frame video-icon video-open"
                          >
                            <i className="bx bx-play" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="banner2-content text-center">
                      <h1>
                        Discover, The Largest NFT <span>Markectplace !</span>
                      </h1>
                      <h6>Naftrend is the World's Wide NFT Marketplace.</h6>
                    </div>
                    <div className="banner-search">
                      <form>
                        <div className="form-inner">
                          <input type="text" placeholder="Search Your Choose" />
                          <input
                            type="submit"
                            defaultValue="SEARCH"
                            className="banner-search-btn eg-btn btn--fill-primary"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="banner-social-icon banner2-social">
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
          </div>
        </div>
      </div>
      <div className="swiper-pagination d-flex flex-column align-items-center justify-content-center gap-4" />
      {/* <img src="assets/images/banner/banner2-smoke1.png" class="banner-bottom-left" alt="">
    <img src="assets/images/banner/banner2-smoke2.png" class="banner-bottom-right" alt=""> */}
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="TboWOSW7qCI"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </div>
  );
}

export default Banner2;
