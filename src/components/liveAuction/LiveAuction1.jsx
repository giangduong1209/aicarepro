import Link from "next/link";
import React from "react";
import liveAuctionData from "../../data/live_auction.json";
import TimeCounnt from "../common/TimeCounnt";
function LiveAuction1() {
  return (
    <>
      <section className="live-auction pb-110">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
              <div className="section-title1">
                <h2>NFT MARKETPLACE</h2>
                <p className="mb-0">
                  Explore the world-leading Gymnastic NFT marketplace with our
                  unique NFT products. We want to be a part of your smile,
                  success and future growth.
                </p>
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
                        <Link href="https://explore.aicarepro.com/S">
                          <a className="eg-btn btn--outline">See more</a>
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
                </div>
              );
            })}
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 text-center">
              <Link href="https://explore.aicarepro.com/">
                <a className="eg-btn btn--fill-primary mx-auto">See more</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LiveAuction1;
