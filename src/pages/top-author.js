import React from 'react'
import Link from "next/link";
import Breadcrumb from '../components/common/Breadcrumb'
import Layout from '../components/layout/Layout'
import authorData from '../data/top_author.json'
function TopAuthor() {
  return (
    <Layout>
      <Breadcrumb title="TOP AUTHOR" description={`The winner of this auction will receive the edition #2/5 copy of "Did you ever really love me?" by Mad Dog Jones. The edition of 1 is shown only for auction purposes`}/>
      <section className="top-author-section pt-110 pb-110">
  <div className="container">
    <div className="row gy-4 mb-50 d-flex justify-content-center">
      {
authorData.map((data)=>{
  const {id, image, authorImage, name , username}=data
  return(
    <div key={id} className="col-xl-3 col-lg-4 col-md-6 col-sm-10 ">
    <div data-wow-duration="0.5s" data-wow-delay="0.2s" className="eg-card author-card1 wow fadeInDown">
      <div className="author-img">
        <img src={image} alt="" />
      </div>
      <div className="author-content">
        <div className="t-author">
          <img src={authorImage} alt="" />
          <h5><Link href="/author-details">{name}</Link></h5>
          <span>{username}</span>
        </div>
        <div className="t-author-buttons">
          <Link href="/author-details"><a  className="top-author-btn">Details</a></Link>
          <a href="#" className="follow-btn">Follow</a>
        </div>
      </div>
    </div>
  </div>
  )
})
      }
    
    </div>
    <div className="row">
      <div className="col-md-12 d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination gap-3">
            <li className="page-item">
              <a className="page-link" href="#">
                <svg width={22} height={12} viewBox="0 0 22 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.4488 6.63158L21.0526 6.63158C21.5758 6.63158 22 6.20743 22 5.68421C22 5.16099 21.5758 4.73684 21.0526 4.73684L10.4488 4.73684C10.385 4.73684 10.3333 4.68513 10.3333 4.62133V1.737C10.3333 0.9661 9.49786 0.485112 8.8312 0.872208L1.48936 5.13521C0.825539 5.52065 0.825537 6.47934 1.48936 6.86479L8.8312 11.1278C9.49786 11.5149 10.3333 11.0339 10.3333 10.263V6.74709C10.3333 6.6833 10.385 6.63158 10.4488 6.63158Z" />
                </svg>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">01</a></li>
            <li className="page-item"><a className="page-link active" href="#">02</a></li>
            <li className="page-item"><a className="page-link" href="#">03</a></li>
            <li className="page-item"><a className="page-link" href="#">04</a></li>
            <li className="page-item">
              <a className="page-link" href="#">
                <svg width={22} height={12} viewBox="0 0 22 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5512 5.36842H0.947369C0.424151 5.36842 0 5.79257 0 6.31579C0 6.83901 0.424152 7.26316 0.94737 7.26316H11.5512C11.615 7.26316 11.6667 7.31487 11.6667 7.37867V10.263C11.6667 11.0339 12.5021 11.5149 13.1688 11.1278L20.5106 6.86479C21.1745 6.47935 21.1745 5.52066 20.5106 5.13521L13.1688 0.872208C12.5021 0.485113 11.6667 0.966099 11.6667 1.737V5.25291C11.6667 5.3167 11.615 5.36842 11.5512 5.36842Z" />
                </svg>    
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</section>

    </Layout>
  )
}

export default TopAuthor