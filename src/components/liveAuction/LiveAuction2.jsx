import React from "react";
import Link from "next/link";
import liveAuctionData from "../../data/live_auction.json";
import TimeCounnt from "../common/TimeCounnt";
function LiveAuction2() {
  return (
    <section className="live-auction pb-110">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
            <div className="section-title1">
              <h2>Live Auction</h2>
              <p className="mb-0">
                Explore on the world&apos;s best &amp; largest NFT marketplace
                with our beautiful NFT products. We want to be a part of your
                smile, success and future growth.
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-4 mb-50 d-flex justify-content-center">
          {liveAuctionData.slice(0, 6).map((data) => {
            const { id, image, title, ethPrice, dolarPrice, authorName } = data;
            return (
              <div key={id} className="col-xl-4 col-md-6 col-sm-10 ">
                <div
                  data-wow-duration="0.5s"
                  data-wow-delay="0.2s"
                  className="eg-card auction-card2 hover-shine wow fadeInDown"
                >
                  <div className="auction-img">
                    <img src={image} alt="" />
                    <div className="author-area">
                      <div className="author-name">
                        <span>by {authorName}</span>
                      </div>
                      <div className="author-emo">
                        <img src="assets/images/icons/author-emo.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="auction-content">
                    <div className="auction-card-body">
                      <h5>
                        <Link href="/auction-details">{title}</Link>
                      </h5>
                      <div className="price-area text-center">
                        <h5>Current Price : {ethPrice}</h5>
                        <p>$ {dolarPrice}</p>
                      </div>
                    </div>
                    <div className="auction-card-bttm">
                      <div className="row d-flex align-items-center">
                        <div className="col-6 text-start">
                          {/* <div className="auction-timer">
                                    <div className="countdown" id="timer1">
                                      <h4><TimeCounnt/></h4>
                                    </div>
                                  </div> */}
                        </div>
                        <div className="col-6 text-end">
                          <Link href="/auction-details">
                            <a className="eg-btn btn--outline">Place a Bid</a>
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
            <Link href="/live-auction">
              <a className="eg-btn btn--fill-primary mx-auto">View All</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveAuction2;
