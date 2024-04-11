import Link from "next/link";
import React from "react";
import { useState } from "react";
import Select from "react-select";
import Breadcrumb from "../components/common/Breadcrumb";
import Paginations from "../components/common/Paginations";
import TimeCount2 from "../components/common/TimeCount2";
import Layout from "../components/layout/Layout";
import featureData from "../data/coming_feature.json";

function ComingFeatures() {
  const options = [
    { value: "best-work", label: "best-work" },
    { value: "Festival", label: "Festival" },
    { value: "Art & Design", label: "Art & Design" },
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
      width: 130,
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
    <Layout>
      <Breadcrumb
        title="COMING FEATURED ASSETS"
        description={`The winner of this auction will receive the edition #2/5 copy of "Did you ever really love me?" by Mad Dog Jones. The edition of 1 is shown only for auction purposes`}
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
            </div>
          </div>
          <div className="row gy-4 mb-70 d-flex justify-content-center">
            {featureData.map((data) => {
              const { id, category, image, ehtPrice, title, authorName } = data;
              return (
                <div key={id} className="col-xl-4 col-lg-4 col-md-6 col-sm-10 ">
                  <div
                    data-wow-duration="0.5s"
                    data-wow-delay="0.3s"
                    className="eg-card c-feature-card1 hover-shine wow fadeInDown"
                  >
                    <div className="auction-img">
                      <img src={image} alt="" />
                      <div className="auction-timer2 gap-3" id="timer1">
                        <TimeCount2 />
                      </div>
                      <div className="author-area2">
                        <div className="author-name">
                          <span>by {authorName}</span>
                        </div>
                        <div className="author-emo">
                          <img
                            src="assets/images/icons/author-emo.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="c-feature-content">
                      <div className="c-feature-category">{category}</div>
                      <Link href="/auction-details">
                        <a>
                          <h5>{title}</h5>
                        </a>
                      </Link>
                      <p>Current Price :{ehtPrice}</p>
                      <div className="auction-card-bttm">
                        <Link href="/auction-details">
                          <a className="eg-btn btn--outline">View More</a>
                        </Link>
                        <div className="share-area">
                          <ul className="social-icons d-flex">
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
  );
}

export default ComingFeatures;
