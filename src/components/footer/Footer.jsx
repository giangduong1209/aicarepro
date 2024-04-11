import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <footer className="footer-section">
      <div className="container-fluid">
        <div className="row footer-top gy-5">
          <div className="col-xl-6">
            <div className="row gy-5">
              <div className="col-md-6">
                <div className="subscribe-area">
                  <h3>Subscribe Us?</h3>
                  <p>
                    Let’s start looking for something unique and limited art.
                    Have it the only one in the world.
                  </p>
                  <form>
                    <div className="form-inner">
                      <input type="text" placeholder="Enter your email" />
                      <button className="subscribe-btn">Subscribe</button>
                    </div>
                  </form>
                  <h5>Join the community</h5>
                  <ul className="footer-social d-flex">
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
              <div className="col-md-6">
                <div className="footer-item">
                  <div className="footer-title">
                    <span />
                    <Link href="#">
                      <img
                        style={{ cursor: "pointer" }}
                        className="main-logo"
                        src="assets/images/bg/AICP_logo_white.svg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <p>Discover the most advanced Gymnastic NFT Marketplace.</p>
                </div>
                <div className="footer-item">
                  <div className="footer-title">
                    <span />
                    <h5>Dial to talk with us?</h5>
                  </div>
                  <p className="mb-0">
                    <a href="tel:88 0176 1111 456">+012345678</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row gy-5">
              <div className="col-md-4 col-sm-6">
                {/* <div className="footer-title">
                  <span />
                  <Link href="https://marketplace.aifitness.co">
                    <h5 style={{ cursor: "pointer" }}>NFT Marketplace</h5>
                  </Link>
                </div> */}
                <ul className="footer-list">
                  {/* <li>
                    <Link href="/explore">NFT Marketplace</Link>
                  </li> */}
                  {/* <li>
                    <Link href="/collection-detail">Featured NFTs</Link>
                  </li>
                  <li>
                    <Link href="#coming-featured-assets">
                      Coming Featured Assets
                    </Link>
                  </li>
                  <li>
                    <Link href="#hot-collection">Hot Collection</Link>
                  </li>
                  <li>
                    <Link href="#top-creator<">Top Creator</Link>
                  </li>
                  <li>
                    <Link href="#latest-blog">Latest Blog</Link>
                  </li>
                  <li>
                    <Link href="#what-client-say">What Client Say</Link>
                  </li> */}
                </ul>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="footer-title">
                  <span />
                  <h5>Community</h5>
                </div>
                <ul className="footer-list">
                  <li>
                    <Link href="#test">Help Center</Link>
                  </li>
                  <li>
                    <Link href="#test">Partners</Link>
                  </li>
                  <li>
                    <Link href="#test">Suggestions</Link>
                  </li>
                  <li>
                    <Link href="#test">Our News</Link>
                  </li>
                  <li>
                    <Link href="#test">Newsletter</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="footer-title">
                  <span />
                  <h5>Important</h5>
                </div>
                <ul className="footer-list">
                  <li>
                    <Link href="#test">FAQ</Link>
                  </li>
                  <li>
                    <Link href="#test">Tracking</Link>
                  </li>
                  <li>
                    <Link href="#test">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#test">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link href="#test">Notice / Message Widget</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-bottom d-flex align-items-center">
          <div className="col-lg-6 text-lg-start text-center order-lg-1 order-2">
            <div className="copyright">
              Copyright 2022 <Link href="#">AI Care Pro</Link>
              {/* <Link href="#">Egens Lab</Link> */}
            </div>
          </div>
          <div className="col-lg-6 text-lg-end text-center order-lg-2 order-1 mb-lg-0 mb-3">
            {/* <div className="payment-area">
              <ul className="pay-list d-flex align-items-center justify-content-lg-end justify-content-center m-0">
                <li className=" d-md-block d-none">
                  <a href="#">We Accepts:</a>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <img src="assets/images/bg/f-pay1.png" alt="" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <img src="assets/images/bg/f-pay2.png" alt="" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <img src="assets/images/bg/f-pay3.png" alt="" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <img src="assets/images/bg/f-pay4.png" alt="" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <img src="assets/images/bg/f-pay5.png" alt="" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
