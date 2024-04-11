import Head from "next/head";
import { useEffect, useState } from "react";
import Banner1 from "../components/banner/Banner1";
import LatestBlog1 from "../components/blog/LatestBlog1";
import CommingFeature1 from "../components/commingFeature/CommingFeature1";
import CategorySlide from "../components/common/CategorySlide";
import Preloader from "../components/common/Preloader";
import NFT from "../components/nft/NFT";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import HotCollection from "../components/hotCollection/HotCollection";
import LiveAuction1 from "../components/liveAuction/LiveAuction1";
import Testimonial1 from "../components/testimonial/Testimonial1";
import TopAuthor from "../components/topAuthor/TopAuthor";

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Head>
            <title>
              AI Care Pro - The most advanced Gymnastic NFT Marketplace
            </title>
            <meta
              name="description"
              content="Buy, sell, discover, exclusive digital collectibles from our sports drops and get VIP privileges."
            />
            <link rel="icon" href="/favicon.png" />
          </Head>
          <Header />
          <Banner1 />
          {/* <CategorySlide /> */}
          <LiveAuction1 />
          <NFT />
          <CommingFeature1 />
          <HotCollection />
          <TopAuthor />
          <LatestBlog1 />
          <Testimonial1 sectionPadding=" pt-110 pb-110" />
          <Footer />
        </>
      )}
    </>
  );
}
