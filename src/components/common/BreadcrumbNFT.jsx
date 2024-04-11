import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

function BreadcrumbNFT({ title, description }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="inner-banner-section position-relative">
        <ul className="inner-banner-social">
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
        {/* <div className="banner-chat-area">
          <Link href="/contact">
            <a>
              <h5>Lets Chat</h5>
            </a>
          </Link>
        </div> */}
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="inner-banner-content d-flex justify-content-center align-items-center text-lg-start text-center">
                {/* <h2 class="rotate-text">FAQs</h2> */}
                <div className="inner-banner-text">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="collection-statis">
                    <div className="collection-row">
                      <div className="collection-col">
                        <span className="collection-num collection-num-mobile">
                          9,999
                        </span>
                        <div className="collection-text">Items</div>
                      </div>
                      <div className="collection-col">
                        <span className="collection-num collection-num-mobile">
                          2,000
                        </span>
                        <div className="collection-text">Owner</div>
                      </div>
                      <div className="collection-col">
                        <span className="collection-num collection-num-mobile">
                          0.5
                        </span>
                        <div className="collection-text">Floor Price</div>
                      </div>
                      <div className="collection-col">
                        <span className="collection-num collection-num-mobile">
                          1,000 BNB
                        </span>
                        <div className="collection-text">Volume Traded</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-lg-block d-none">
              <div className="inner-banner-video position-relative">
                {/* <img src="assets/images/bg/inner-bannerbg.png" alt=""> */}
                {/* <div
                  className="video-play video-style2"
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
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="TboWOSW7qCI"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </>
  );
}

export default BreadcrumbNFT;
