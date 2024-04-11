import React from "react";
import Link from "next/link";
import featureData from "../../data/feature_data.json";
function NFT() {
  return (
    <>
      <section className="featured-section pb-110 pt-110" id="featured-artwork">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
              <div className="section-title2">
                <h2>Featured NFTs</h2>
                <p className="mb-0">Explore our best NFTs.</p>
              </div>
            </div>
          </div>
          <div className="row gy-4 mb-50 d-flex justify-content-center">
            {featureData.map((item) => {
              const {
                id,
                image,
                authorImage,
                autohr,
                title,
                ethPrice,
                likeCount,
              } = item;
              return (
                <div key={id} className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                  <div
                    data-wow-duration="0.5s"
                    data-wow-delay="0.2s"
                    className="eg-card featured-card1 wow fadeInDown"
                  >
                    <div className="featured-img">
                      <img src={image} alt="" />
                      <div className="card-overlay">
                        <Link href="/auction-details">
                          <a className="eg-btn btn--fill-white">View Details</a>
                        </Link>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-meta">
                        <div className="f-author">
                          <img src={authorImage} alt="" />
                          <p>{autohr}</p>
                        </div>
                        <Link href="#">
                          <a className="like-btn">
                            <i className="bx bx-heart" />
                            <span>{likeCount}</span>
                          </a>
                        </Link>
                      </div>
                      <h5>
                        <Link href="/auction-details">
                          <a>{title}</a>
                        </Link>
                      </h5>
                      <div className="featured-card-bttm">
                        <span>Price:</span>
                        <span>{ethPrice}</span>
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
                <a className="eg-btn btn--fill-white mx-auto">See more</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NFT;
