import React from "react";
import Link from "next/link";
import AuthorProfile from "../components/author/AuthorProfile";
import Breadcrumb from "../components/common/Breadcrumb";
import Paginations from "../components/common/Paginations";
import Layout from "../components/layout/Layout";
import auctionData from "../data/live_auction.json";
import TimeCounnt from "../components/common/TimeCounnt";
import Select from "react-select";
import { useState } from "react";
function AuthorDetails() {
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
        title="AUTHOR DETAILS"
        description={`The winner of this auction will receive the edition #2/5 copy of "Did you ever really love me?" by Mad Dog Jones. The edition of 1 is shown only for auction purposes.`}
      />
      <section className="top-author-section pt-110 pb-110">
        <div className="container">
          <div className="row gy-4 d-flex justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-8 col-sm-10 ">
              <AuthorProfile />
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-10 ">
              <div className="author-details--title">
                <h4>Author Bio-</h4>
              </div>
              <div className="author-details-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac commodo nulla, ac vestibulum arcu. Sed sit ame purus
                  ultrices, ultrices nisl eget, porta felis. Ut nec interdum
                  est. Fusce ut quam lacus. Nam dui sem, efficitur ut augue et,
                  aliquam facilisis lectus. Sed ullamcorper hendrerit
                  scelerisque.
                </p>
              </div>
              <div className="author-social-area d-flex justify-content-lg-start justify-content-center align-items-center">
                <h5>Follow Social :</h5>
                <ul className="author-social-list d-flex align-items-center gap-3">
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
              <div className="author-collection-area d-flex justify-content-between flex-wrap">
                <h5>Jane Cooper Collection</h5>
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
              <div className="row g-4 mb-50">
                {auctionData.slice(0, 4).map((data) => {
                  const { id, image, ethPrice, title, dolarPrice, authorName } =
                    data;
                  return (
                    <div key={id} className="col-lg-6 col-md-6 col-sm-12">
                      <div
                        data-wow-duration="0.5s"
                        data-wow-delay="0.3s"
                        className="eg-card auction-card1 hover-shine wow fadeInDown"
                      >
                        <div className="auction-img">
                          <img src={image} alt="" />
                          {/* <div className="auction-timer">
                      <div className="countdown" id="timer2">
                        <h4><TimeCounnt/></h4>
                      </div>
                    </div> */}
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
                            <Link href="/auction-details">{title}</Link>
                          </h5>
                          <p>Current Price :{ethPrice}</p>
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
                                <a href="#" className="share-btn">
                                  <i className="bx bxs-share-alt" />
                                </a>
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
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AuthorDetails;
