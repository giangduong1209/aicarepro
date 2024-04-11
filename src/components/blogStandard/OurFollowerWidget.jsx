import React from 'react'

function OurFollowerWidget() {
  return (
    <div className="blog-widget-item">
    <div className="follow-area">
      <h5 className="blog-widget-title">OUR FOLLOWER</h5>
      <div className="blog-widget-body">
        <ul className="follow-list">
          <li><a href="#"><span><i className="bx bxl-facebook" />Facebook</span><span>50,520</span></a></li>
          <li><a href="#"><span><i className="bx bxl-twitter" />Twitter</span><span>42,035</span></a></li>
          <li><a href="#"><span><i className="bx bxl-instagram" />Instagram</span><span>3,850</span></a></li> 
          <li><a href="#"><span><i className="bx bxl-pinterest" />Pinterest</span><span>10,590</span></a></li> 
        </ul>
      </div>
    </div>
  </div>
  
  )
}

export default OurFollowerWidget