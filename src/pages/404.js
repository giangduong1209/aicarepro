import React from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
function CustomError() {
  return (
    <Layout>
      <div className="error-section pt-110 pb-110">
        <div className="container">
          <div className="row d-flex justify-content-center mb-70">
            <div className="col-lg-6 col-md-8">
              <div className="error-bg-wrap">
                <img
                  src="assets/images/bg/error-bg.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 text-center">
              <div className="section-title3 style2">
                <h3>There’s nothing here</h3>
                <p>
                  The page you are looking for may have been renamed or does
                  nost exist in this server you will be redirected to homepage
                  shortly
                </p>
              </div>
              <Link href="/">
                <a className="eg-btn error-btn">Back Home</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CustomError;
