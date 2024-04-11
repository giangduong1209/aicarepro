import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";

function Contact() {
  return (
    <>
      <Layout>
       
        <Breadcrumb title="Contact" description={`The winner of this auction will receive the edition #2/5 copy of "Did you ever really love me?" by Mad Dog Jones. The edition of 1 is shown only for auction purposes.`} />
        <div className="contact-section pt-110 pb-110">
  <div className="container">
    <div className="row pb-120 mb-70 g-4 d-flex justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm-8">
        <div className="eg-card contact-signle">
          <div className="icon">
            <i className="bi bi-geo-alt" />
          </div>
          <div className="text">
            <h4>Location</h4>
            <p>168/170, Ave 01,Old York Drive Rich Mirpur, Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-8">
        <div className="contact-signle">
          <div className="icon">
            <i className="bx bx-phone-call" />
          </div>
          <div className="text">
            <h4>Phone</h4>
            <a href="tel:+880171-770000"><h5>+02 135498 26649</h5></a>
            <a href="tel:+8801761111456"><h6>+8801761111456</h6></a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-8">
        <div className="contact-signle">
          <div className="icon">
            <i className="bx bx-envelope" />
          </div>
          <div className="text">
            <h4>Email</h4>
            <a href="mailto:support@example.com"><h5>support@example.com</h5></a>
            <a href="mailto:info@example.com"><h6>info@example.com</h6></a>
          </div>
        </div>
      </div>
    </div>
    <div className="row d-flex justify-content-center">
      <div className="col-md-8 text-center">
        <div className="section-title3">
          <h3>Have a Questions? Get in Touch!</h3>
          <p>Pellentesque id sollicitudin congue quisque turpis auctor turpis sollicitudin ipsum etset.</p>
        </div>
      </div>
    </div>
    <div className="row d-flex justify-content-center">
      <div className="col-lg-8 text-center">
        <div className="contact-form-wrap">
          <form className="contact-form">
            <div className="row">
              <div className="col-md-12">
                <div className="form-inner">
                  <label>Your Full Name</label>
                  <input type="text" placeholder="Enter your name" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner">
                  <label>Your Email</label>
                  <input type="text" placeholder="Enter your email" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner">
                  <label>Subject</label>
                  <input type="text" placeholder="Subject" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-inner">
                  <label>Your Message</label>
                  <textarea placeholder="Your message" rows={5} defaultValue={""} />
                </div>
              </div>
              <div className="col-md-12 text-start">
                <Link href="/blog-sidebar"><a  className="eg-btn btn--fill-primary contact-btn"><span>Send Message</span></a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

      </Layout>
    </>
  );
}

export default Contact;
