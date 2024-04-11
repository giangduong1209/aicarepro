import React from "react";
import Link from "next/link";
import HotCollectionData from "../../data/hot_collection.json";
function HotCollection() {
  return (
    <section className="h-collection-section pb-110 pt-110" id="hot-collection">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
            <div className="section-title2">
              <h2>Hot Collection</h2>
              {/* <p className="mb-0">
                Explore on the worlds best &amp; largest NFT marketplace with
                our beautiful NFT products. We want to be a part of your smile,
                success and future growth.
              </p> */}
            </div>
          </div>
        </div>
        <div className="row gy-4 mb-50 d-flex justify-content-center">
          {HotCollectionData.map((data) => {
            const { id, image, title, price } = data;
            return (
              <div key={id} className="col-lg-4 col-md-6 col-sm-10">
                <div
                  data-wow-duration="0.5s"
                  data-wow-delay="0.2s"
                  className="eg-card h-collection-card wow fadeInDown"
                >
                  <div className="h-collection-img position-relative">
                    <div className="share-area2">
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
                    <img src={image} alt="" />
                  </div>
                  <div className="h-collection-content">
                    <h5>
                      <Link href="/auction-details">
                        <a>{title}</a>
                      </Link>
                    </h5>
                    <div className="collection-card-bttm">
                      <span>Price:</span>
                      <span>{price}</span>
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
  );
}

export default HotCollection;
