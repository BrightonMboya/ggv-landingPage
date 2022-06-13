import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
// import logo from "./assets/logo.svg";
import Background from "./components/background";
const HomePage = () => {
  return (
    <div>
      <div>
        {/* <Background /> */}
        {/* <Image
          src={logo}
          layout="fixed"
          quality={100}
          objectFit="contain"
          width={80}
        /> */}
        <h3 className="text-black text-3xl">Hello World</h3>
      </div>

      <div>
        {/* <Image src={logo} layout="fixed" quality={100} objectFit="contain" /> */}
        <h3 className="text-black text-3xl">Hello Worled</h3>
      </div>
    </div>
  );
};

export default HomePage;
