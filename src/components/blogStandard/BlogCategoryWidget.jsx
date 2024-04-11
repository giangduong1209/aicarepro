import React from "react";

function BlogCategoryWidget() {
  return (
    <div className="blog-widget-item">
      <div className="blog-category">
        <h5 className="blog-widget-title">BLOG CATEGORY</h5>
        <div className="blog-widget-body">
          <ul className="category-list">
            <li>
              <a href="#">
                <span>Audio Solution</span>
                <span>03</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>TVT Survillance</span>
                <span>06</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>TVT Survillance</span>
                <span>05</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Selector Zone</span>
                <span>10</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Wireless</span>
                <span>09</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Headband</span>
                <span>02</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BlogCategoryWidget;
