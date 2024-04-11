import React from "react";
import Link from "next/link";
import TopAuthorData from "../../data/top_author.json";
function TopAuthor() {
  return (
    <section className="top-author-section pt-110 pb-110" id="top-creator">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
            <div className="section-title1">
              <h2>Top Creator</h2>
              {/* <p className="mb-0">
                Explore on the worlds best &amp; largest NFT marketplace with
                our beautiful NFT products. We want to be a part of your smile,
                success and future growth.
              </p> */}
            </div>
          </div>
        </div>
        <div className="row gy-4 mb-50 d-flex justify-content-center">
          {TopAuthorData.slice(0, 8).map((data) => {
            const { id, image, authorImage, name, username } = data;
            return (
              <div key={id} className="col-xl-3 col-lg-4 col-md-6 col-sm-10 ">
                <div
                  data-wow-duration="0.5s"
                  data-wow-delay="0.2s"
                  className="eg-card author-card1 wow fadeInDown"
                >
                  <div className="author-img">
                    <img src={image} alt="" />
                  </div>
                  <div className="author-content">
                    <div className="t-author">
                      <img src={authorImage} alt="" />
                      <h5>
                        <Link href="/author-details">
                          <a>{name}</a>
                        </Link>
                      </h5>
                      <span>{username}</span>
                    </div>
                    <div className="t-author-buttons">
                      <Link href="/author-details">
                        <a className="top-author-btn">Details</a>
                      </Link>
                      <Link href="#">
                        <a className="follow-btn">Follow</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="row d-flex justify-content-center">
          <div className="col-md-4 text-center">
            <Link href="/top-author">
              <a className="eg-btn btn--fill-primary mx-auto"> See more</a>
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default TopAuthor;
