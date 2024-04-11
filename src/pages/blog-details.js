import React from 'react'
import BlgoTagWidget from '../components/blogStandard/BlgoTagWidget'
import BlogCategoryWidget from '../components/blogStandard/BlogCategoryWidget'
import CloudtagWidget from '../components/blogStandard/CloudtagWidget'
import OurFollowerWidget from '../components/blogStandard/OurFollowerWidget'
import SearchWidget from '../components/blogStandard/SearchWidget'
import Breadcrumb from '../components/common/Breadcrumb'
import Layout from '../components/layout/Layout'
import Select from 'react-select';
import { useState } from 'react'
function BlogDetails() {
  const options = [
    { value: 'Show 01-06', label: 'Show 01-06' },
    { value: 'Show 05-10', label: 'Show 05-10' },
    { value: 'Show 10-15', label: 'Show 10-15' },
  ];
  const [selectedOption, setSelectedOption] = useState(null);  
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: '1px dotted pink',
      color: state.selectProps.menuColor,
      padding: 5,
    }),
    control: provided => ({
      ...provided,           
      height: 20,
      width: 130,
      margin: 0,
      border: "0px solid black",
      fontSize: 15,
      fontWeight: "500",
      backgroundColor: '#f6f9ff',
      outline: 'none',    
      boxShadow:"none"        
  }),
  
  
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }
  return (
   <Layout>
    <Breadcrumb title="BLOG DETAILS" description={`The winner of this auction will receive the edition #2/5 copy of "Did you ever really love me?" by Mad Dog Jones. The edition of 1 is shown only for auction purposes.`}/>
    <section className="blog-details-section pt-110 pb-110">
  <div className="container">
    <div className="row gy-5 d-flex justify-content-center">
      <div className="col-xl-8 col-lg-8">
        <div className="blog-details-area">
          <div className="blog-details-img">
            <img src="assets/images/blog/blog-details-bg.png" className="img-fluid" alt="" />
          </div>
          <div className="blog-details-meta d-flex justify-content-between align-items-center">
            <div className="date d-flex align-items-center">
              <i className="bx bx-time-five" /><span>Date: 25 Jan 2021</span>
            </div>
            <div className="category">
              <a href="#">Art Work</a>
            </div>
          </div>
          <div className="blog-details-content">
            <h3>Even without internet at home, students can keep learning</h3>
            <p className="paragraph">Gochujang ugh viral, butcher pabst put a bird Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id est laborum cupidatat non proident, sunt in culpa qui then it is safe to have get products delivered to you on it meditation austin craft beer banh mi. Distillery ramps af, goch ujang hell of VHS kitsch austin. Vegan air plant trust fund, poke sartorial ennui next lev el photo booth coloring book etsy green juice meditation austin craft beer.</p>
            <blockquote>
              <p className="paragraph">If the delivery provider maintains all the standards then it is safe to have get products delivered to you. It is hard to maintain but still safer to get your products ordered</p>
              <a href="#"><h5 className="quote-author">-Leslie Alexander-</h5></a>
            </blockquote>
            <p className="paragraph">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <div className="details-img-group">
              <div className="row g-4 d-flex justify-content-center">
                <div className="col-lg-6 col-md-6">
                  <img src="assets/images/blog/blog-d1.png" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 col-md-6">
                  <img src="assets/images/blog/blog-d2.png" className="img-fluid" alt="" />
                </div>
              </div>
            </div>
            <h4>How can have anything you ant in life if you ?</h4>
            <p className="paragraph">Do you want to start an NFT business but struggling to decide what to call it? If so, you’ve landed on the right page. In this article, you’ll find a huge collection of unique and eye-catching NFT business name ideas to get your creative juices flowing and help you find an awesome name for your NFT startup.</p>
            <p className="paragraph">If you’ve been following the crypto space, you’ve likely heard of Non-Fungible Tokens (NFTs), more popularly referred to as ‘Crypto Collectibles.’ The world of NFTs is growing rapidly. It seems there is no slowing down of these assets as they continue to go up in price. This growth comes with the opportunity for people to start new businesses to create and capture value. The market is open for players in every kind of field. Are you a collector? Maybe an artist looking for a way to digitally represent your pieces?</p>
            <div className="post-share">
              <div className="row g-3">
                <div className="col-md-6 text-md-start text-center">
                  <h5>Share Your Timeline :</h5>
                </div>
                <div className="col-md-6 text-md-end text-center">
                  <ul className="post-share-list d-flex justify-content-md-end justify-content-center gap-3">
                    <li><a href="#"><i className="bx bxl-facebook" /></a></li>
                    <li><a href="#"><i className="bx bxl-twitter" /></a></li>
                    <li><a href="#"><i className="bx bxl-pinterest" /></a></li>
                    <li><a href="#"><i className="bx bxl-instagram" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="next-prev-post">
              <div className="row g-4">
                <div className="col-md-6 text-md-start text-center">
                  <a href="#">
                    <h6>Previous Post</h6>
                    <p>Bitcoing is being popular day bt day</p>
                  </a>
                </div>
                <div className="col-md-6 text-md-end text-center">
                  <a href="#">
                    <h6> Next Post</h6>
                    <p>10 Hottest Facebook Trends in What’s the</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="post-react-area text-lg-start text-center">
              <h5>Show Your React</h5>
              <ul className="emoji-list d-flex justify-content-lg-start justify-content-center align-items-center gap-md-4 gap-2">
                <li><a href="#">
                    <img src="assets/images/icons/emoji1.svg" alt="" />
                  </a></li>
                <li><a href="#">
                    <img src="assets/images/icons/emoji2.svg" alt="" />
                  </a></li>
                <li><a href="#">
                    <img src="assets/images/icons/emoji3.svg" alt="" />
                  </a></li>
                <li><a href="#">
                    <img src="assets/images/icons/emoji4.svg" alt="" />
                  </a></li>
                <li><a href="#">
                    <img src="assets/images/icons/emoji5.svg" alt="" />
                  </a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* comment-area */}
        <div className="blog-comment-area">
          <div className="all-comments-area d-flex justify-content-between flex-wrap">
            <h5>All Comments</h5>
           
            <Select
                styles={customStyles}
                components={{
                  IndicatorSeparator: () => null
                }}
                width='130px'
                menuColor='#333'
                defaultValue={selectedOption} 
                options={options}

                placeholder="Filter Item"
                />
          </div>
          <ul className="comment-list">
            <li>
              <div className="signle-comment">
                <div className="comment-header d-flex justify-content-start align-items-center">
                  <div className="comment-image">
                    <img src="assets/images/blog/comment1.png" alt="" />
                  </div>
                  <h5>Sata Waston</h5>
                  <span>- 10th Jan 2021</span>
                </div>
                <div className="comment-body">
                  <p className="paragraph">Aenean dolor massa, rhoncus ut tortor in, pretium tempus neque. Vestibulum venenati leo et dic tum finibus. Nulla vulputate dolor sit amet tristique dapibus.Gochujang ugh viral, butcher     pabst put a bird on it meditation austin.</p>
                </div>
                <div className="comment-footer d-flex justify-content-between align-items-center">
                  <ul className="react-list d-flex justify-content-start gap-3">
                    <li><a href="#"><i className="bx bx-like" /></a></li>
                    <li><a href="#"><i className="bx bx-heart" /></a></li>
                  </ul>
                  <a href="#" className="reaply-btn">Reply</a>
                </div>
              </div>
            </li>
            <li>
              <div className="signle-comment">
                <div className="comment-header d-flex justify-content-start align-items-center">
                  <div className="comment-image">
                    <img src="assets/images/blog/comment2.png" alt="" />
                  </div>
                  <h5>Jerome Bell</h5>
                  <span>- 10th Jan 2021</span>
                </div>
                <div className="comment-body">
                  <p className="paragraph">Aenean dolor massa, rhoncus ut tortor in, pretium tempus neque. Vestibulum venenati leo et dic tum finibus. Nulla vulputate dolor sit amet tristique dapibus.Gochujang ugh viral, butcher     pabst put a bird on it meditation austin.</p>
                </div>
                <div className="comment-footer d-flex justify-content-between align-items-center">
                  <ul className="react-list d-flex justify-content-start gap-3">
                    <li><a href="#"><i className="bx bx-like" /></a></li>
                    <li><a href="#"><i className="bx bx-heart" /></a></li>
                  </ul>
                  <a href="#" className="reaply-btn">Reply</a>
                </div>
              </div>
            </li>
            <li>
              <div className="signle-comment">
                <div className="comment-header d-flex justify-content-start align-items-center">
                  <div className="comment-image">
                    <img src="assets/images/blog/comment3.png" alt="" />
                  </div>
                  <h5>Wade Warren</h5>
                  <span>- 10th Jan 2021</span>
                </div>
                <div className="comment-body">
                  <p className="paragraph">Aenean dolor massa, rhoncus ut tortor in, pretium tempus neque. Vestibulum venenati leo et dic tum finibus. Nulla vulputate dolor sit amet tristique dapibus.Gochujang ugh viral, butcher     pabst put a bird on it meditation austin.</p>
                </div>
                <div className="comment-footer d-flex justify-content-between align-items-center">
                  <ul className="react-list d-flex justify-content-start gap-3">
                    <li><a href="#"><i className="bx bx-like" /></a></li>
                    <li><a href="#"><i className="bx bx-heart" /></a></li>
                  </ul>
                  <a href="#" className="reaply-btn">Reply</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="blog-comment-form">
          <div className="comment-form-title">
            <h5>Leave A Comment</h5>
          </div>
          <form className="comment-form">
            <div className="row">
              <div className="col-sm-6">
                <div className="form-inner">
                  <input type="text" placeholder="Name :" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-inner">
                  <input type="text" placeholder="Email :" />
                </div>
              </div>
              <div className="col-12 text-center">
                <div className="form-inner">
                  <textarea name="commentmsg" rows={5} placeholder="Message :" defaultValue={""} />
                </div>
                <button type="submit" className="eg-btn btn--fill-primary comment-from-btn">Send Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4">
        <div className="blog-sidebar">
          <SearchWidget/><BlogCategoryWidget/>
          <BlgoTagWidget/>
         <CloudtagWidget/>
         <OurFollowerWidget/>
         </div>
      </div>
    </div>
  </div>
</section>

   </Layout>
  )
}

export default BlogDetails