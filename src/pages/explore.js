import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import Explore from "../components/explore/Explore";
import Paginations from "../components/common/Paginations";
import CategorySlide from "../components/common/CategorySlide";

function About() {
  return (
    <Layout>
      <Breadcrumb
        title="NFT MARKETPLACE"
        description={`Buy, sell, and discover exclusive digital collectibles from our sports drops and gymnastic collections. Hold unique AI Care Pro NFTs to earn rewards and get more VIP privileges.`}
      />
      {/* <CategorySlide /> */}
      <Explore />
      {/* <div className="row pb-110">
        <Paginations />
      </div> */}
    </Layout>
  );
}

export default About;
