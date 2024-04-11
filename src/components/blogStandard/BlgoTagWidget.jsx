import React from "react";
import Link from "next/link";
function BlgoTagWidget() {
  return (
    <div className="blog-widget-item">
      <div className="top-blog">
        <h5 className="blog-widget-title">TOP BLOG</h5>
        <div className="blog-widget-body">
          <ul className="top-blog-list">
            <li>
              <Link href="/blog-details">
                <a>
                  {" "}
                  <div className="top-blog-item">
                    <div className="top-blog-img">
                      <img src="assets/images/blog/top-blog1.png" alt="" />
                    </div>
                    <div className="top-blog-content">
                      <h6>NFT Trading Surges as Penguins Drive New Boom</h6>
                      <p>4th Jan 2022</p>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog-details">
                <a>
                  <div className="top-blog-item">
                    <div className="top-blog-img">
                      <img src="assets/images/blog/top-blog3.png" alt="" />
                    </div>
                    <div className="top-blog-content">
                      <h6>Trading Surges as the libraries embeddable</h6>
                      <p>4th Feb 2022</p>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog-details">
                <a>
                  <div className="top-blog-item">
                    <div className="top-blog-img">
                      <img src="assets/images/blog/top-blog2.png" alt="" />
                    </div>
                    <div className="top-blog-content">
                      <h6>Experiment with NFT The libraries embeddable</h6>
                      <p>4th Feb 2022</p>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BlgoTagWidget;
