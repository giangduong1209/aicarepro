import Link from 'next/link'
import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Layout from '../components/layout/Layout'

function Signup() {
  return (
    <Layout>
        <Breadcrumb title="COMING FEATURED ASSETS" description={`The winner of this auction will receive the edition #2/5 copy of "Did you ever really love me?" by Mad Dog Jones. The edition of 1 is shown only for auction purposes.`}/>
        <div className="signup-section pt-110 pb-110">
  <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-xl-6 col-lg-8 col-md-10">
        <div className="right-form-area">
          <div className="form-title">
            <h3>Sign Up</h3>
            <p>Do you already have an account? <Link href="/login">Log in here</Link></p>
          </div>
          <form className="w-100">
            <div className="row">
              <div className="col-md-6">
                <div className="form-inner">
                  <label>Frist Name</label>
                  <input type="email" placeholder="Frist Name" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner">
                  <label>Last Name</label>
                  <input type="email" placeholder="Last Name" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-inner">
                  <label>Enter Your Email *</label>
                  <input type="email" placeholder="Enter Your Email *" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-inner">
                  <label>Password *</label>
                  <input type="password" name="password" id="password" placeholder="Create A Password" />
                  <i className="bi bi-eye-slash" id="togglePassword" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                  <div className="form-group">
                    <input type="checkbox" id="html" />
                    <label htmlFor="html">I agree to the Terms &amp; Policy</label>
                  </div>
                </div>
              </div>
            </div>
            <button className="account-btn">Log in</button>
          </form>
          <div className="alternate-signup-box">
            <h6>or Sign up WITH</h6>
            <div className="btn-group gap-4">
              <Link href="#"><a  className="eg-btn google-btn d-flex align-items-center"><i className="bx bxl-google" /><span>Signup whit google</span></a></Link>
              <Link href="#" ><a className="eg-btn facebook-btn d-flex align-items-center"><i className="bx bxl-facebook" />Sign up whit facebook</a></Link>
            </div>
          </div>
          <div className="form-poicy-area">
            <p>By clicking the "Sign up" button, you create a Cobiro account, and you agree to Cobiro&apos;s <a href="#">Terms &amp; Conditions &amp; Privacy Policy.</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </Layout>
  )
}

export default Signup