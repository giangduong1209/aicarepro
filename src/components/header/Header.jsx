import Link from "next/link";
import React, { useEffect, useReducer, useState } from "react";
import { useRouter } from "next/router";
/*---------Using reducer mange the active or inactive menu----------*/
const initialState = { activeMenu: "" };

function reducer(state, action) {
  switch (action.type) {
    case "homes":
      return { activeMenu: "homes" };
    case "auction":
      return { activeMenu: "auction" };
    case "pages":
      return { activeMenu: "pages" };
    case "news":
      return { activeMenu: "news" };
    default:
      return { activeMenu: "" };
  }
}
function Header() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [closeSidebar, setCloseSidebar] = useState(false);
  const [sidebarMenu, setSidebarMenu] = useState(false);
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector("header");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add("sticky")
      : header.classList
      ? header.classList.remove("sticky")
      : header.classList.add("sticky");
  };

  const handleMobileMenu = () => {
    if (closeSidebar === false || closeSidebar === 0) {
      setCloseSidebar(1);
    } else {
      setCloseSidebar(false);
    }
  };
  const handleSidebarMenu = () => {
    if (sidebarMenu === false || sidebarMenu === 0) {
      setSidebarMenu(1);
    } else {
      setSidebarMenu(false);
    }
  };
  const handleMobileSearch = () => {
    if (mobileSearch === false || mobileSearch === 0) {
      setMobileSearch(1);
    } else {
      setMobileSearch(false);
    }
  };
  return (
    <>
      <div className={mobileSearch ? "mobile-search slide" : "mobile-search"}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-11">
              <label>What are you lookking for?</label>
              <input
                type="text"
                placeholder="Search Products, Category, Brand"
              />
            </div>
            <div
              className="col-1 d-flex justify-content-end align-items-center"
              onClick={handleMobileSearch}
            >
              <div className="search-cross-btn">
                <i className="bi bi-x" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className={
          sidebarMenu
            ? " menu-toggle-btn-full-shape show-sidebar"
            : "menu-toggle-btn-full-shape"
        }
      >
        <div className="menu-toggle-wrap bg-white">
          <div className="sidebar-top-area d-flex justify-content-between align-items-center">
            <div className="sidebar-logo">
              <Link href="/">
                <img src="assets/images/bg/sidebar-logo.png" alt="" />
              </Link>
            </div>
            <div className="cross-icon" onClick={handleSidebarMenu}>
              <i className="bx bx-x" />
            </div>
          </div>
          <div className="sidebar-body">
            <h5>Our Social Site</h5>
            <ul className="sidebar-social">
              <li>
                <a href="#">
                  <i className="bx bxl-facebook" />
                  <span>facebook.com/egenslab</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-twitter" />
                  <span>twitter.com/egenslab/</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-instagram" />
                  <span>instagram.com/egenslab/</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-pinterest-alt" />
                  <span>pinterest.com/egenslab/</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="sidebar-bottom">
            <p>Need Any Help? Please Mail Us!</p>
            <a href="mailto:info@example.com">
              <span>
                <i className="bx bx-envelope" /> info@egenslab.com
              </span>
            </a>
          </div>
        </div>
        <div className="sidebar-bottom-icon">
          <svg
            width={40}
            height={41}
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_1687_55"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={40}
              height={41}
            >
              <rect width="39.8116" height={41} fill="#C4C4C4" />
            </mask>
            <g mask="url(#mask0_1687_55)">
              <path d="M30.6961 2.43256L1.93437 23.5151C0.104333 24.8566 -0.246827 27.4996 1.15152 29.4073L16.3665 50.1642C17.7648 52.0719 20.391 52.5325 22.221 51.1911L50.9828 30.1085C52.8128 28.7671 53.164 26.1241 51.7657 24.2164L36.5507 3.45945C35.1523 1.55176 32.5262 1.09113 30.6961 2.43256ZM32.3867 4.73888C32.537 4.62871 32.7038 4.55641 32.8761 4.51736L27.8759 28.7454L3.26629 26.2216C3.35545 26.0691 3.47455 25.9317 3.62484 25.8215L32.3867 4.73888ZM49.2922 27.8021L20.5304 48.8847C19.9201 49.3321 19.0453 49.1787 18.5789 48.5424L4.37018 29.1583L28.9084 31.6743C29.2548 31.7094 29.5815 31.6137 29.8397 31.4245C30.0979 31.2352 30.2876 30.9525 30.3582 30.6116L35.3445 6.45391L49.5532 25.8381C50.0195 26.4744 49.9026 27.3547 49.2922 27.8021Z" />
            </g>
          </svg>
        </div>
      </div> */}

      <header>
        <div className="container-fluid">
          <div className="header-area">
            <div className="header-logo">
              <Link href="/">
                <img
                  className="main-logo"
                  src="assets/images/bg/AICP_logo_white.svg"
                  alt="logo"
                />
              </Link>
            </div>
            <div className={closeSidebar ? "main-menu show-menu" : "main-menu"}>
              <div className="mobile-logo-area d-lg-none d-block">
                <div className="mobile-logo-wrap d-flex justify-content-between align-items-center">
                  <img
                    style={{ height: "45px" }}
                    src="assets/images/bg/AIfitness_logo_white.png"
                    alt=""
                  />
                  <div className="menu-close-btn" onClick={handleMobileMenu}>
                    <i className="bi bi-x-lg" />
                  </div>
                </div>
              </div>
              <ul className="menu-list">
                {/* <li className="menu-item">
                  <Link href="/">
                    <a
                      // className="menu-link drop-down"
                      className={
                        currentRoute === "/"
                          ? "active menu-link"
                          : "menu-link non-active"
                      }
                      onClick={() => dispatch({ type: "homes" })}
                    >
                      Home
                      Home <i className="bx bx-chevron-down dropdown-icon" />
                    </a>
                  </Link>
                  <ul
                    className={
                      state.activeMenu === "homes"
                        ? "submenu d-block"
                        : "submenu d-none"
                    }
                  >
                    <li className="sub-item">
                      <Link href="/">
                        <a
                          className={
                            currentRoute === "/" ? "active" : "non-active"
                          }
                        >
                          Home 1
                        </a>
                      </Link>
                    </li>
                    <li className="sub-item">
                      <Link href="/home2">
                        <a
                          className={
                            currentRoute === "/home2" ? "active" : "non-active"
                          }
                        >
                          home 2
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li> */}
                {/* <li className="menu-item">
                  <Link href="#browse-by-category">
                    <a
                      className={
                        currentRoute === "/about"
                          ? "active menu-link"
                          : "menu-link non-active"
                      }
                    >
                      Browse by Category
                    </a>
                  </Link>
                </li> */}
                <li className="menu-item">
                  {/* <Link href="/explore">
                    <a
                      // className="menu-link drop-down"
                      className={
                        currentRoute === "/explore"
                          ? "active menu-link"
                          : "menu-link non-active"
                      }
                      onClick={() => dispatch({ type: "auction" })}
                    >
                      NFT MARKETPLACE
                      <i className="bx bx-chevron-down dropdown-icon" />
                    </a>
                  </Link> */}
                  {/* <ul
                    className={
                      state.activeMenu === "auction"
                        ? "submenu d-block"
                        : "submenu d-none"
                    }
                  >
                    <li className="sub-item">
                      <Link href="/live-auction">
                        <a
                          className={
                            currentRoute === "/live-auction"
                              ? "active"
                              : "non-active"
                          }
                        >
                          Collection
                        </a>
                      </Link>
                    </li>
                    <li className="sub-item">
                      <Link href="/auction-details">
                        <a
                          className={
                            currentRoute === "/auction-details"
                              ? "active"
                              : "non-active"
                          }
                        >
                          Collection Details
                        </a>
                      </Link>
                    </li>
                  </ul> */}
                </li>
                {/* <li className="menu-item">
                  <Link href="#">
                    <a
                      className="menu-link drop-down"
                      onClick={() => dispatch({ type: "news" })}
                    >
                      News
                      <i className="bx bx-chevron-down dropdown-icon" />
                    </a>
                  </Link>
                  <ul
                    className={
                      state.activeMenu === "news"
                        ? "submenu d-block"
                        : "submenu d-none"
                    }
                  >
                    <li className="sub-item">
                      <Link href="/blog-grid">
                        <a
                          className={
                            currentRoute === "/blog-grid"
                              ? "active"
                              : "non-active"
                          }
                        >
                          Latest News
                        </a>
                      </Link>
                    </li>
                    <li className="sub-item">
                      <Link href="blog-standard">
                        <a
                          className={
                            currentRoute === "/blog-standard"
                              ? "active"
                              : "non-active"
                          }
                        >
                          Blog Standard
                        </a>
                      </Link>
                    </li>
                    <li className="sub-item">
                      <Link href="/blog-details">
                        <a
                          className={
                            currentRoute === "/blog-details"
                              ? "active"
                              : "non-active"
                          }
                        >
                          Blog details
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link href="#">
                    <a
                      className="menu-link drop-down"
                      onClick={() => dispatch({ type: "pages" })}
                    >
                      Page
                      <i className="bx bx-chevron-down dropdown-icon" />
                    </a>
                  </Link>
                  <ul
                    className={
                      state.activeMenu === "pages"
                        ? "submenu d-block"
                        : "submenu d-none"
                    }
                  >
                    <li className="sub-item">
                      <Link href="top-author">
                        <a
                          className={
                            currentRoute === "/top-author"
                              ? "active"
                              : "non-active"
                          }
                        >
                          top author
                        </a>
                      </Link>
                    </li>
                    <li className="sub-item">
                      <Link href="author-details">
                        <a
                          className={
                            currentRoute === "/author-details"
                              ? "active"
                              : "non-active"
                          }
                        >
                          author details
                        </a>
                      </Link>
                    </li>
                    <li className="sub-item">
                      <Link href="coming-features">
                        <a
                          className={
                            currentRoute === "/coming-features"
                              ? "active"
                              : "non-active"
                          }
                        >
                          coming features
                        </a>
                      </Link>
                    </li>

                    <li className="sub-item">
                      <Link href="signup">
                        <a
                          className={
                            currentRoute === "/signup" ? "active" : "non-active"
                          }
                        >
                          sign up
                        </a>
                      </Link>
                    </li>
                    <li className="sub-item">
                      <Link href="login">
                        <a
                          className={
                            currentRoute === "/login" ? "active" : "non-active"
                          }
                        >
                          login
                        </a>
                      </Link>
                    </li>
                    <li className="sub-item">
                      <Link href="faq">
                        <a
                          className={
                            currentRoute === "/faq" ? "active" : "non-active"
                          }
                        >
                          faq
                        </a>
                      </Link>
                    </li>
                    <li className="sub-item">
                      <Link href="/404">
                        <a
                          className={
                            currentRoute === "/404" ? "active" : "non-active"
                          }
                        >
                          Error-404
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                */}
                {/* <li className="menu-item">
                  <Link href="#">
                    <a
                      className={
                        currentRoute === "/collection-detail"
                          ? "active menu-link"
                          : "non-active menu-link"
                      }
                    >
                      My collection
                    </a>
                  </Link>
                </li> */}
                {/* <li className="menu-item">
                  <Link href="#coming-featured-assets">
                    <a
                      className={
                        currentRoute === "#coming-featured-assets"
                          ? "active menu-link"
                          : "non-active menu-link"
                      }
                    >
                      My Collection
                    </a>
                  </Link>
                </li> */}
                {/* <li className="menu-item">
                  <Link href="#">
                    <a
                      className={
                        currentRoute === "/nft-detail"
                          ? "active menu-link"
                          : "non-active menu-link"
                      }
                    >
                      Transaction
                    </a>
                  </Link>
                </li> */}
                {/* <li className="menu-item">
                  <Link href="#top-creator">
                    <a
                      className={
                        currentRoute === "/nft-detail"
                          ? "active menu-link"
                          : "non-active menu-link"
                      }
                    >
                      Top Creator
                    </a>
                  </Link>
                </li> */}
                <li className="menu-item">
                  {/* <Link href="#latest-blog">
                    <a
                      className={
                        currentRoute === "/nft-detail"
                          ? "active menu-link"
                          : "non-active menu-link"
                      }
                    >
                      Latest Blog
                    </a>
                  </Link> */}
                </li>
                <li className="menu-item">
                  {/* <Link href="#what-client-say">
                    <a
                      className={
                        currentRoute === "/nft-detail"
                          ? "active menu-link"
                          : "non-active menu-link"
                      }
                    >
                      What Client Say
                    </a>
                  </Link> */}
                </li>
              </ul>
              <div className="d-lg-none d-block">
                <div className="mobile-search-area d-flex justify-content-center">
                  <input type="text" placeholder="Search Here" />
                  <div className="search-icon">
                    <i className="bx bx-search-alt-2" />
                  </div>
                </div>
                <ul className="mobile-social d-flex justify-content-center">
                  <li>
                    <a
                      //  target={"_blank"}
                      href="#"
                    >
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      // target={"_blank"}
                      href="h#"
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
            {/* <div className="header-btn d-xl-block d-none bg-btn">
              <a href="#">Create</a>
            </div>
            <div className="header-btn d-xl-block d-none">
              <a href="#">Connect Wallet</a>
            </div> */}
            <div className="header-icons d-flex align-items-center">
              <div
                className="search-icon search-btn d-lg-block d-none"
                onClick={handleMobileSearch}
              >
                <i className="bx bx-search-alt-2" />
              </div>
              <div
                className="sidebar-menu-icon d-lg-block d-none"
                onClick={handleSidebarMenu}
              >
                {/* <i className="bx bx-menu" /> */}
              </div>
              <div
                className="mobile-menu-btn d-lg-none d-block"
                onClick={handleMobileMenu}
              >
                <i className="bx bx-menu" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
