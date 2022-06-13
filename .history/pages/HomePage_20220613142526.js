import React from "react";
import home from "./assets/home.jpg";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import logo from "./assets/logo.svg";
import Background from "./components/background";
const HomePage = () => {
  return (
    <div>
      <div className={styles.bgWrap}>
        {/* <Image src={home} layout="responsive" objectFit="cover" quality={100} /> */}
        <Background />
        <Image src={logo} layout="fixed" quality={100} objectFit="contain" />
        <h3 className="text-black text-3xl">Hello Worled</h3>
      </div>

      <div>
        <Image src={logo} layout="fixed" quality={100} objectFit="contain" />
        <h3 className="text-black text-3xl">Hello Worled</h3>
      </div>
    </div>
  );
};

export default HomePage;
