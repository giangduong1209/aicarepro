import React from "react";
import Head from "next/head";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>AI Care Pro - The most advanced Gymnastic NFT Marketplace</title>
        <meta
          name="description"
          content="Buy, sell, discover, exclusive digital collectibles from our sports drops and get VIP privileges."
        />
        <link rel="icon" href="favicon.png" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
