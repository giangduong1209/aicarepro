import Link from "next/link";
import React from "react";
import liveAuctionData from "../../data/live_auction.json";
import TimeCounnt from "../common/TimeCounnt";
function Explore() {
  return (
    <>
      <section className="live-auction">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
              <div className="section-title1">
                <h2>Collections</h2>
                {/* <p className="mb-0">
                  Explore on the worlds best &amp; largest NFT marketplace with
                  our beautiful NFT products. We want to be a part of your
                  smile, success and future growth.
                </p> */}
              </div>
            </div>
          </div>
          <div className="row gy-4 mb-50 d-flex justify-content-center">
            {liveAuctionData.slice(0, 6).map((item) => {
              const { id, image, title, ethPrice, dolarPrice, authorName } =
                item;
              return (
                <div key={id} className="col-lg-4 col-md-6 col-sm-10 ">
                  <div
                    data-wow-duration="0.5s"
                    data-wow-delay="0.2s"
                    className="eg-card auction-card1 hover-shine wow fadeInDown"
                  >
                    <div className="auction-img">
                      <img src={image} alt="" />
                      {/* <div className="auction-timer">
                        <div className="countdown" id="timer1">
                          <h4>
                            <TimeCounnt />
                          </h4>
                        </div>
                      </div> */}
                      <div className="author-area">
                        <div className="author-emo">
                          <img
                            src="assets/images/icons/author-emo.svg"
                            alt=""
                          />
                        </div>
                        <div className="author-name">
                          <span>by @{authorName}</span>
                        </div>
                      </div>
                    </div>
                    <div className="auction-content">
                      <h5>
                        <Link href="/collection-detail">{title}</Link>
                      </h5>
                      <p>Current Price : {ethPrice}</p>
                      <div className="price">$ {dolarPrice}</div>
                      <div className="auction-card-bttm">
                        <Link href="https://explore.aicarepro.com/">
                          <a className="eg-btn btn--outline">See more</a>
                        </Link>
                        <div className="share-area">
                          <ul className="social-icons d-flex">
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
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Explore;
