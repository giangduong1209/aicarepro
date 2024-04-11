import React from "react";
import Link from "next/link"
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import blogData from "../data/latest_blog.json";
import Paginations from "../components/common/Paginations";

function BlogGrid() {
  return (
    <Layout>
      <Breadcrumb
        title="LATEST NEWS"
        description={`The winner of this auction will receive the edition #2/5 copy of "Did you ever really love me?" by Mad Dog Jones. The edition of 1 is shown only for auction purposes`}
      />
      <section className="blog-grid-section pt-110 pb-110">
        <div className="container">
          <div className="row gy-4 mb-50 d-flex justify-content-center">
            {blogData.map((item) => {
              const { id, image, category, title,date,comment } = item;
              return (
                <div key={id} className="col-xl-4 col-lg-4 col-md-6 col-sm-10 ">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img src={image} alt="" />
                    </div>
                    <div className="blog-content">
                      <p>{category}</p>
                      <h3>
                        <Link href="/blog-details">
                          {title}
                        </Link>
                      </h3>
                      <div className="blog-date-area">
                        <i className="bi bi-stopwatch" />{" "}
                        <span>{date}- By Admin</span>
                      </div>
                      <div className="b-card-bottom">
                        <Link
                          href="/blog-details">
                          <a className="eg-btn btn-half-fill"><span>Read</span> more
                          <i className="bi bi-arrow-right" /></a>
                        </Link>
                        <a href="#" className="blog-comment">
                          {comment} Comment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <Paginations/>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default BlogGrid;
