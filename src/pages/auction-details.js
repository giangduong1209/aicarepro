import Link from "next/link";
import React, { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import TimeCounnt from "../components/common/TimeCounnt";
import Layout from "../components/layout/Layout";
import auctionData from "../data/live_auction.json";
import ModalVideo from "react-modal-video";
import Select from "react-select";
function AuctionDetails() {
  const [isOpen, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "Art Work", label: "Art Work" },
    { value: "Oil Pastle", label: "Oil Pastle" },
    { value: "Water Color", label: "Water Color" },
  ];
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: "1px dotted pink",
      color: state.selectProps.menuColor,
      padding: 5,
    }),
    control: (provided) => ({
      ...provided,
      height: 20,
      width: 150,
      margin: 0,
      border: "0px solid black",
      fontSize: 15,
      fontWeight: "500",
      backgroundColor: "#f6f9ff",
      outline: "none",
      boxShadow: "none",
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };
  return (
    <>
      <Layout>
        {/* <Breadcrumb
          title="NFT DETAILS"
          description={`The winner of this auction will receive the edition #2/5 copy of "Did you ever really love me?" by Mad Dog Jones. The edition of 1 is shown only for auction purposes.`}
        /> */}
        <div className="auction-details-section pt-110">
          <div className="container">
            <div className="row gy-5 mb-50">
              <div className="col-lg-6 d-flex justify-content-center flex-column">
                {/* item-details-gallery */}
                <div className="tab-content mb-4 d-flex justify-content-lg-start justify-content-center">
                  <div
                    className="tab-pane big-image fade show active"
                    id="gallery-img1"
                  >
                    {/* <div className="auction-gallery-timer d-flex align-items-center justify-content-center flex-wrap">
                      <h5>Time Remaining</h5>
                      <h3>
                        <TimeCounnt />
                      </h3>
                    </div> */}
                    <img
                      src="assets/images/bg/auction-big1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="tab-pane big-image fade" id="gallery-img2">
                    {/* <div className="auction-gallery-timer d-flex align-items-center justify-content-start">
                      <h5>Time Remaining</h5>
                      <h3>
                        <TimeCounnt />
                      </h3>
                    </div> */}
                    <img
                      src="assets/images/bg/auction-big2.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="tab-pane big-image fade" id="gallery-img3">
                    {/* <div className="auction-gallery-timer d-flex align-items-center justify-content-start">
                      <h5>Time Remaining</h5>
                      <h3>
                        <TimeCounnt />
                      </h3>
                    </div> */}
                    <img
                      src="assets/images/bg/auction-big3.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div
                    className="tab-pane big-image fade show"
                    id="gallery-img4"
                  >
                    {/* <div className="auction-gallery-timer d-flex align-items-center justify-content-start">
                      <h5>Time Remaining</h5>
                      <h3>
                        <TimeCounnt />
                      </h3>
                    </div> */}
                    <img
                      src="assets/images/bg/auction-big4.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                {/* <ul className="nav small-image-list d-flex justify-content-lg-start justify-content-center gap-xxl-4 gap-2">
                  <li className="nav-item">
                    <div
                      id="details-img1"
                      data-bs-toggle="pill"
                      data-bs-target="#gallery-img1"
                      aria-controls="gallery-img1"
                    >
                      <img
                        src="assets/images/bg/auction-sm1.png"
                        className="img-fluid details-small-image"
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      id="details-img2"
                      data-bs-toggle="pill"
                      data-bs-target="#gallery-img2"
                      aria-controls="gallery-img2"
                    >
                      <img
                        src="assets/images/bg/auction-sm2.png"
                        className="img-fluid details-small-image"
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      id="details-img3"
                      data-bs-toggle="pill"
                      data-bs-target="#gallery-img3"
                      aria-controls="gallery-img3 "
                    >
                      <img
                        src="assets/images/bg/auction-sm3.png"
                        className="img-fluid details-small-image"
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      id="details-img4"
                      data-bs-toggle="pill"
                      data-bs-target="#gallery-img4"
                      aria-controls="gallery-img4"
                    >
                      <img
                        src="assets/images/bg/auction-sm4.png"
                        className="img-fluid details-small-image"
                        alt=""
                      />
                    </div>
                  </li>
                </ul> */}
              </div>
              <div className="col-lg-6">
                <div className="auction-details-content-area">
                  <div className="product-rating-area">
                    <ul>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <a href="#">(32 Review)</a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-details-area text-lg-start text-center">
                    <h3>Girls &amp; flower portrait natural potrait illus</h3>
                    <p>
                      Korem ipsum dolor amet, consectetur adipiscing elit.
                      Maecenas in pulvinar neque. Nulla finibus lobortis
                      pulvinar. Donec a consectetur nulla.
                    </p>
                  </div>
                  <div className="author-pricing-area">
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <div className="author d-flex align-items-center justify-content-sm-start justify-content-center">
                          <div className="author-image">
                            <img
                              src="assets/images/bg/auction-author.png"
                              alt=""
                            />
                          </div>
                          <div className="author-name">
                            <span>Item Owner</span>
                            <a href="#">
                              <h6>Leslie Alexander</h6>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-sm-6 text-center text-sm-end">
                        <div className="price">
                          <div className="current-price">Current Price</div>
                          <h5>
                            1,5629.90 BNB <span>$ 3,459.32</span>
                          </h5>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="auction-product-overview text-lg-start text-center">
                    <h4 className="component-title">Product Over View</h4>
                    <ul className="overview-list">
                      <li>
                        <span>Artist </span>
                        <span>Brooklyn Simmons</span>
                      </li>
                      <li>
                        <span>Size </span>
                        <span>3000 X 3000 cm</span>
                      </li>
                      <li>
                        <span>Create </span>
                        <span>12 December 2021</span>
                      </li>
                      <li>
                        <span>Category </span>
                        <span>Art Work</span>
                      </li>
                      <li>
                        <span>Token ID </span>
                        <span>#12159EDT23</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bid-now-area text-lg-start text-center">
                    <h4 className="component-title">Buy Now</h4>
                    {/* <p>Bid Amount : Minimum Bid : 20.00 BNB</p> */}
                    <form>
                      <div className="form-inner d-flex justify-content-lg-start justify-content-center align-items-center flex-sm-nowrap flex-wrap gap-4">
                        {/* <input type="text" placeholder="$00.00" /> */}
                        <div style={{ fontSize: "40px", fontWeight: "700" }}>
                          0.00001
                          <span>BNB</span>
                        </div>
                        <a
                          href="#"
                          className="eg-btn btn--fill-primary bid-btn"
                        >
                          Buy
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gy-5">
              {/* <div className="col-xl-3 col-lg-4">
                <ul
                  className="nav nav-pills d-flex flex-column justify-content-center gap-sm-4 gap-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active details-tab-btn"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Description
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link details-tab-btn"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Location Map
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link details-tab-btn"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      About Video
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link details-tab-btn"
                      id="pills-bid-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-bid"
                      type="button"
                      role="tab"
                      aria-controls="pills-bid"
                      aria-selected="false"
                    >
                      Biding History
                    </button>
                  </li>
                </ul>
              </div> */}
              {/* <div className="col-xl-9 col-lg-8">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="describe-content">
                      <h4 className="component-title">Product Description</h4>
                      <p className="mb-20">
                        Korem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quis molestiae dolore, quaerat illo adipisci
                        fugiat voluptatibus eligendi provident animi qui totam
                        commodi a dolor saepe labore tempore.
                      </p>
                      <p>
                        Aenean dolor massa, rhoncus ut tortor in, pretium tempus
                        neque. Vestibulum venenatis leo et dictum finibus. Nulla
                        vulp utate dolor sit amet tristique dapibus. Maecenas
                        posuere luctus leo, non consequat felis ullamcorper non.
                        Aliquam erat volutpat. Donec vitae porta enim. Cras eu
                        volutpat dolor, vitae accumsan tellus. Donec pulvinar
                        auctor nunc gravida elit porta non. Aliquam erat
                        volutpat. Proin facilisis interdum felis, sit amet
                        pretium purus feugiat ac. Sed quis dui nec justo
                        ullamcorper molestie. Mauris consequat lacinia est, eget
                        tincidunt leo ornare sed
                      </p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="map-area">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.73467103074!2d90.36181521536365!3d23.828032291722206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c13a21730b43%3A0xb14a9c52d01c00d9!2sMirpur-12%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1640171021567!5m2!1sen!2sbd"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <div className="about-video">
                      <div className="wrapper">
                        <div className="video-pluse">
                          <span />
                          <span />
                          <span />
                          <div
                            onClick={() => setOpen(true)}
                            style={{ cursor: "pointer" }}
                            className="video-frame video-icon video-open"
                          >
                            <i className="bx bx-play" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-bid"
                    role="tabpanel"
                    aria-labelledby="pills-bid-tab"
                  >
                    <div className="bid-list-area">
                      <h6>Recent Bid</h6>
                      <ul className="bid-list">
                        <li>
                          <div className="row d-flex align-items-center">
                            <div className="col-7">
                              <div className="bidder-area">
                                <div className="bidder-img">
                                  <img
                                    src="assets/images/bg/bidder1.png"
                                    alt=""
                                  />
                                </div>
                                <div className="bidder-content">
                                  <a href="#">
                                    <h6>Robart FOX</h6>
                                  </a>
                                  <p>24.50 BNB</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-5 text-end">
                              <div className="bid-time">
                                <p>4 Hours Ago</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="row d-flex align-items-center">
                            <div className="col-7">
                              <div className="bidder-area">
                                <div className="bidder-img">
                                  <img
                                    src="assets/images/bg/bidder2.png"
                                    alt=""
                                  />
                                </div>
                                <div className="bidder-content">
                                  <a href="#">
                                    <h6>Jane Cooper</h6>
                                  </a>
                                  <p>224.5 BNB</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-5 text-end">
                              <div className="bid-time">
                                <p>5 Hours Ago</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="row d-flex align-items-center">
                            <div className="col-7">
                              <div className="bidder-area">
                                <div className="bidder-img">
                                  <img
                                    src="assets/images/bg/bidder3.png"
                                    alt=""
                                  />
                                </div>
                                <div className="bidder-content">
                                  <a href="#">
                                    <h6>Guy Hawkins</h6>
                                  </a>
                                  <p>34.5 BNB</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-5 text-end">
                              <div className="bid-time">
                                <p>6 Hours 45 minutes Ago</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="row d-flex align-items-center">
                            <div className="col-7">
                              <div className="bidder-area">
                                <div className="bidder-img">
                                  <img
                                    src="assets/images/bg/bidder1.png"
                                    alt=""
                                  />
                                </div>
                                <div className="bidder-content">
                                  <a href="#">
                                    <h6>Robart FOX</h6>
                                  </a>
                                  <p>24.50 BNB</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-5 text-end">
                              <div className="bid-time">
                                <p>4 Hours Ago</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="row d-flex align-items-center">
                            <div className="col-7">
                              <div className="bidder-area">
                                <div className="bidder-img">
                                  <img
                                    src="assets/images/bg/bidder2.png"
                                    alt=""
                                  />
                                </div>
                                <div className="bidder-content">
                                  <a href="#">
                                    <h6>Robart FOX</h6>
                                  </a>
                                  <p>24.50 BNB</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-5 text-end">
                              <div className="bid-time">
                                <p>4 Hours Ago</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* <div className="best-work-section pt-110 pb-110">
          <div className="container">
            <div className="row">
              <div className="best-work-select d-flex justify-content-between flex-wrap">
                <h5>Best Art Work</h5>
                <Select
                  styles={customStyles}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  width="130px"
                  menuColor="#333"
                  defaultValue={selectedOption}
                  options={options}
                  placeholder="Filter Item"
                />
              </div>
            </div>
            <div className="row d-flex justify-content-center g-4">
              {auctionData.slice(0, 3).map((data) => {
                const { id, image, authorName, BNBPrice, dolarPrice, title } =
                  data;
                return (
                  <div key={id} className="col-lg-4 col-md-6 col-sm-10 ">
                    <div className="eg-card auction-card1 hover-shine">
                      <div className="auction-img">
                        <img src={image} alt="" />
                        <div className="auction-timer">
                          <div className="countdown" id="timer2">
                            <h4>
                              <TimeCounnt />
                            </h4>
                          </div>
                        </div>
                        <div className="author-area">
                          <div className="author-emo">
                            <img
                              src="assets/images/icons/author-emo.svg"
                              alt=""
                            />
                          </div>
                          <div className="author-name">
                            <span>by {authorName}</span>
                          </div>
                        </div>
                      </div>
                      <div className="auction-content">
                        <h5>
                          <Link href="/auction-details">
                            <a>{title}</a>
                          </Link>
                        </h5>
                        <p>Current Price : {BNBPrice}</p>
                        <div className="price">${dolarPrice}</div>
                        <div className="auction-card-bttm">
                          <Link href="/auction-details">
                            <a className="eg-btn btn--outline">Place a Bid</a>
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
                              <Link href="#">
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
        </div> */}
      </Layout>
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

export default AuctionDetails;
