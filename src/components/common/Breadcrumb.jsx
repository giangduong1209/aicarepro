import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Row, Col, Space, FloorPriceIcon } from "antd";
function Breadcrumb({ title, description }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="inner-banner-section position-relative">
        <ul className="inner-banner-social">
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

export default Breadcrumb;
