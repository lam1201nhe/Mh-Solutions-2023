import Head from "next/head";
import ProductBox from "@/components/ProductBox";
import Slides from "@/components/Slides";
import PartnerBox from "@/components/PartnerBox";
import NewsBoxRebuild from "@/components/NewsBoxRebuild";
import * as request from "@/utils/request";
import { useState, useEffect } from "react";
import SlidesProductList from "@/components/SlidesProductList";
import styles from "@/styles/Home.module.scss";

const styling = {
  paddingTop: "calc(708 / 1441 * 100%)",
};

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    request.post("home-page/search").then((res) => {
      setData(res?.items);
    });
  }, []);
  return (
    <>
      <Head>
        <title>MH Solutions</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slides paddingTop={styling} checkNav={false} />
      <ProductBox items={data} className={styles.productBox}/>
      <div className={styles.slidesProductList}>
      <SlidesProductList items={data} className={styles.slidesProductList} tiny/>
      </div>
      <NewsBoxRebuild />
      <PartnerBox />
    </>
  );
}

//HOW TO SET UP NESTED LAYOUT

// Home.getLayout = function getLayout(page) {
//   return (
//   );
// };
