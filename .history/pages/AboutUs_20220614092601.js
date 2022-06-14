import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Head from "next/head";
// import home from "./assets/home.jpg";

const AboutUs = () => {
  return (
    <div className="">
      <div className={`${styles.bgWrap} ${styles.bg}`}>
        <Image
          src="/about.jpg"
          layout="fill"
          // width={900}
          // height={800}
          objectFit="cover"
          quality={100}
        />
        <div className={styles.content}>
          <h2 className="text-white lg:text-4xl text-center text-2xl">
            Global Green Visa
          </h2>
          <p className="text-white lg:text-xl text-center text-md">
            Welcome to Global Green Visa, a gateway to environmental tourism
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
