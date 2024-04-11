import Link from 'next/link'
import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Layout from '../components/layout/Layout'

function Login() {
  return (
    <Layout>
      <Breadcrumb title="OMING FEATURED ASSETS" description={`The winner of this auction will receive the edition #2/5 copy of "Did you ever really love me?" by Mad Dog Jones. The edition of 1 is shown only for auction purposes.`} />
      <div className="login-section pt-110 pb-110">
  <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-lg-6 col-md-8">
        <div className="right-form-area">
          <div className="form-title">
            <h3>Log in</h3>
            <p>New Member? <Link href="/signup">Sign Up here</Link></p>
          </div>
          <form className="w-100">
            <div className="row">
              <div className="col-12">
                <div className="form-inner">
                  <label>Enter Your Email *</label>
                  <input type="email" placeholder="Enter Your Email *" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-inner">
                  <label>Password *</label>
                  <input type="password" name="password" id="password" placeholder="Password" />
                  <i className="bi bi-eye-slash" id="togglePassword" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                  <div className="form-group">
                    <input type="checkbox" id="html" />
                    <label htmlFor="html">I agree to the Terms &amp; Policy</label>
                  </div>
                  <a href="#" className="forgot-pass">Forgotten Password</a>
                </div>
              </div>
            </div>
            <button className="account-btn">Log in</button>
          </form>
          <div className="alternate-signup-box">
            <h6>or Sign up WITH</h6>
            <div className="btn-group gap-4">
              <Link href="#"><a className="eg-btn google-btn d-flex align-items-center"><i className="bx bxl-google" /><span>Signup whit google</span></a></Link>
              <Link href="#"><a className="eg-btn facebook-btn d-flex align-items-center"><i className="bx bxl-facebook" />Sign up whit facebook</a></Link>
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

export default Login