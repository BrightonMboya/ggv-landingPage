import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="">
      <Head>
        <title>Welcome to GGV</title>
        <meta
          name="description"
          content="Your Gateway to environmental tourism"
        />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Syne:wght@400;500;600;700&display=swap');
        </style>
      </Head>
      <div className={`${styles.bgWrap} ${styles.bg}`}>
        <div className="bg-gradient from-black to to-blue">
          <Image
            src="/simba.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            style={{
              opacity: 0.7
            }}
          />
        </div>
        <div className="w-[70px] h-[70px] relative mt-6 ml-6 ">
          <Image src="/logo.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={styles.content}>
          <h2 className="text-white md:text-[4.7] text-center text-6xl font-semibold">
            Global Green Visa
          </h2>
          <p className="text-white font-medium lg:text-xl text-center text-2xl leading-loose py-5 md:text-[2.5rem]">
            Welcome to Global Green Visa, a gateway to environmental tourism
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
