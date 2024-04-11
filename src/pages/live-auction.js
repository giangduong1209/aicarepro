import React, { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import liveAuctionData from "../data/live_auction.json";
import TimeCounnt from "../components/common/TimeCounnt";
import Link from "next/link";
import Select from "react-select";

import Paginations from "../components/common/Paginations";
function LiveAuction() {
  const options = [
    { value: "Art Work", label: "Art Work" },
    { value: "Oil Pastle", label: "Oil Pastle" },
    { value: "Water Color", label: "Water Color" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
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
        <Breadcrumb
          title="LIVE AUCTION"
          description={`The winner of this auction will receive the edition #2/5 copy of "Did you ever really love me?" by Mad Dog Jones. The edition of 1 is shown only for auction purposes.`}
        />
        <section className="live-auction-section pt-110 pb-110">
          <div className="container">
            <div className="row mb-50">
              <div className="all-comments-area d-flex justify-content-between flex-wrap">
                <h5>All Auction</h5>
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
                {/* <select name="best-work">
                  <option>Select Your Category</option>
                  <option>Art Work</option>
                  <option>Oil Pastle</option>
                  <option>Water Color</option>
                </select> */}
              </div>
            </div>
            <div className="row gy-4 mb-50 d-flex justify-content-center">
              {liveAuctionData.map((item) => {
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
                        <div className="auction-timer">
                          <div className="countdown" id="timer1">
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
                            <span>by @{authorName}</span>
                          </div>
                        </div>
                      </div>
                      <div className="auction-content">
                        <h5>
                          <Link href="/auction-details">{title}</Link>
                        </h5>
                        <p>Current Price : {ethPrice}</p>
                        <div className="price">$ {dolarPrice}</div>
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
            <div className="row">
              <Paginations />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default LiveAuction;
