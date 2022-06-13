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
        <Background />
        <Image
          src={logo}
          layout="fixed"
          quality={100}
          objectFit="contain"
          width={30}
        />
        <h3 className="text-black text-3xl">Hello Worled</h3>
      </div>

      {/* <div>
        <Image src={logo} layout="fixed" quality={100} objectFit="contain" />
        <h3 className="text-black text-3xl">Hello Worled</h3>
      </div> */}
    </div>
  );
};

export default HomePage;
