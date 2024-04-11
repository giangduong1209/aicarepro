import Link from "next/link";
import React from "react";

function AuthorProfile() {
  return (
    <>
      <div className="eg-card author-details-card">
        <div className="details-header">
          <div className="author-image">
            <i className="bx bxs-edit" />
            <img src="assets/images/author/author-details.png" alt="" />
          </div>
          <Link href="#">
           <a> <h5>Jane Cooper</h5></a>
          </Link>
          <p>Digital NFTs Designer</p>
          <Link href="#">
            <a className="eg-btn author-id-btn">Author ID: 0x76669f...a0e9ca</a>
          </Link>
        </div>
        <div className="details-body">
          <ul className="about-author-list">
            <li>
              <Link href="#">
                <a><span>Project Published :</span>
                <span>520</span></a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a><span>Appreciations Project :</span>
                <span>35</span></a>
              </Link>
            </li>
            <li>
              <Link href="#">
               <a> <span>Followers :</span>
                <span>225</span></a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="details-footer">
          <Link href="#">
            <a className="eg-btn btn--fill-primary follow-btn">+ FOLLOW ME</a>
          </Link>
          <p>
            MEMBER SINCE: <span>MARCH 29, 2021</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default AuthorProfile;
