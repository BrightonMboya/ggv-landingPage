import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
// import logo from "./assets/logo.svg";
import Background from "./components/background";

const HomePage = () => {
  return (
    <div>
      <Image src="/home.jpg" layout="intrinsic" width="100vh" height="100vh" />
      <h3>Home Page</h3>
    </div>
  );
};

export default HomePage;
