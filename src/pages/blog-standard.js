import Link from "next/link";
import React from "react";
import BlgoTagWidget from "../components/blogStandard/BlgoTagWidget";
import BlogCategoryWidget from "../components/blogStandard/BlogCategoryWidget";
import CloudtagWidget from "../components/blogStandard/CloudtagWidget";
import OurFollowerWidget from "../components/blogStandard/OurFollowerWidget";
import SearchWidget from "../components/blogStandard/SearchWidget";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import blogDetailsdata from "../data/blog_details.json";

function BlogStandard() {
  return (
    <Layout>
      <Breadcrumb
        title="BLOG STANDARD"
        description={`The winner of this auction will receive the edition #2/5 copy of "Did you ever really love me?" by Mad Dog Jones. The edition of 1 is shown only for auction purposes.`}
      />
      <section className="blog-standard-section pt-110 pb-110">
        <div className="container">
          <div className="row gy-5 d-flex justify-content-center">
            <div className="col-xl-8 col-lg-8">
              <div className="blog-standard-wrap mb-50">
                {blogDetailsdata.map((data) => {
                  const { id, image, title, description, comment } = data;
                  return (
                    <div key={id} className="blog-standard-item">
                      <div className="blog-standard-img">
                        <Link href="/blog-details">
                         <a><img src={image} className="img-fluid" alt="" /></a>
                        </Link>
                      </div>
                      <Link href="/blog-details">
                        <a><h3>{title}</h3></a>
                      </Link>
                      <div className="blog-standard-content">
                        <p>{description}</p>
                        <div className="blogs-btn-area d-flex justify-content-between align-items-center">
                          <Link href="/blog-details">
                            <a className="eg-btn btn-half-fill blog-standard-btn">
                              <span>Read</span> more
                            </a>
                          </Link>
                          <Link href="#">
                            <a className="blogs-comment">{comment} Comments</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* blog-paination-area */}
              <nav aria-label="Page navigation example">
                <ul className="pagination gap-3 d-flex justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <svg
                        width={22}
                        height={12}
                        viewBox="0 0 22 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.4488 6.63158L21.0526 6.63158C21.5758 6.63158 22 6.20743 22 5.68421C22 5.16099 21.5758 4.73684 21.0526 4.73684L10.4488 4.73684C10.385 4.73684 10.3333 4.68513 10.3333 4.62133V1.737C10.3333 0.9661 9.49786 0.485112 8.8312 0.872208L1.48936 5.13521C0.825539 5.52065 0.825537 6.47934 1.48936 6.86479L8.8312 11.1278C9.49786 11.5149 10.3333 11.0339 10.3333 10.263V6.74709C10.3333 6.6833 10.385 6.63158 10.4488 6.63158Z" />
                      </svg>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      01
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link active" href="#">
                      02
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      03
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      04
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <svg
                        width={22}
                        height={12}
                        viewBox="0 0 22 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.5512 5.36842H0.947369C0.424151 5.36842 0 5.79257 0 6.31579C0 6.83901 0.424152 7.26316 0.94737 7.26316H11.5512C11.615 7.26316 11.6667 7.31487 11.6667 7.37867V10.263C11.6667 11.0339 12.5021 11.5149 13.1688 11.1278L20.5106 6.86479C21.1745 6.47935 21.1745 5.52066 20.5106 5.13521L13.1688 0.872208C12.5021 0.485113 11.6667 0.966099 11.6667 1.737V5.25291C11.6667 5.3167 11.615 5.36842 11.5512 5.36842Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="blog-sidebar">
                <SearchWidget />
                <BlogCategoryWidget />
                <BlgoTagWidget />
                <CloudtagWidget />
                <OurFollowerWidget />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default BlogStandard;
