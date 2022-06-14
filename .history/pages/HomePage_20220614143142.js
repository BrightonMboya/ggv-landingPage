import React from "react";
import styled from "styled-components";
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
        <Image
          src="/home.jpg"
          layout="fill"
          // width={900}
          // height={800}
          objectFit="cover"
          quality={100}
          style={{ opacity: 0.7 }}
        />
        <div className="w-[100px] h-[100px] relative mt-6 ml-6 ">
          <Image src="/logo.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={styles.content}>
          <h2 className="text-black lg:text-4xl text-center text-7xl font-semibold">
            Global Green Visa
          </h2>
          <p className="text-white lg:text-xl text-center text-2xl">
            Welcome to Global Green Visa, a gateway to environmental tourism
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomePage;

// className="absolute lg:top-[50%] top-[6%]"
// className="lg:justify-center lg:items-center sm:h-0 lg:flex lg:h-[100vh]"
