import Head from "next/head";
import React from "react";
import Banner2 from "../components/banner/Banner2";
import LatestBlog2 from "../components/blog/LatestBlog2";
import CommingFeature2 from "../components/commingFeature/CommingFeature2";
import CategorySlide from "../components/common/CategorySlide";
// import Feature1 from "../components/feature/Feature1";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import HotCollection from "../components/hotCollection/HotCollection";
import LiveAuction2 from "../components/liveAuction/LiveAuction2";
import Testimonial1 from "../components/testimonial/Testimonial1";
import TopAuthor from "../components/topAuthor/TopAuthor";

function Home2() {
  return (
    <>
      <Head>
        <title>Naftrend - NFT Marketplace React Next Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Banner2 />
      {/* <CategorySlide style2="cat-style-2" /> */}
      <LiveAuction2 />
      <HotCollection />
      <CommingFeature2 />
      {/* <Feature1 /> */}
      <LatestBlog2 />
      <TopAuthor />
      <Testimonial1 sectionPadding="pb-110" />
      <Footer />
    </>
  );
}

export default Home2;
