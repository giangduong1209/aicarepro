import React from "react";

function SearchWidget() {
  return (
    <div className="blog-widget-item">
      <div className="search-area">
        <h5 className="blog-widget-title style2">SEARCH HERE</h5>
        <div className="blog-widget-body">
          <form>
            <div className="form-inner d-flex align-items-center">
              <input type="text" placeholder="Search Here" />
              <button className="eg-btn btn--fill-primary search-btn">
                SEAECH
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchWidget;
