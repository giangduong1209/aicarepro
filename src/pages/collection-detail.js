import React from "react";
import BreadcrumbNFT from "../components/common/BreadcrumbNFT";
import Layout from "../components/layout/Layout";

import CollectionDetail from "../components/collection/CollectionDetail";

function About() {
  return (
    <Layout>
      <BreadcrumbNFT
        title="Collection Detail"
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi eius consectetur! Perspiciatis quae sequi deleniti maiores numquam! Distinctio reiciendis mollitia corporis voluptas necessitatibus harum et quas deleniti tempora esse.`}
      />
      <CollectionDetail />
    </Layout>
  );
}

export default About;
