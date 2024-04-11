import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import NFT from "../components/nft/NFT";

function About() {
  return (
    <Layout>
      <Breadcrumb
        title="NFT"
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi eius consectetur! Perspiciatis quae sequi deleniti maiores numquam! Distinctio reiciendis mollitia corporis voluptas necessitatibus harum et quas deleniti tempora esse.`}
      />
      <NFT />
    </Layout>
  );
}

export default About;
