import React from "react";
import home from "./assets/home.jpg";
import styles from "../styles/Home.module.css";
import Image from "next/image";
const HomePage = () => {
  return (
    <div className={styles.bgWrap}>
      <Image src={home} layout="responsive" objectFit="cover" quality={100} />
      <h3 className="text-4xl text-white">Hello world</h3>
    </div>
  );
};

export default HomePage;
