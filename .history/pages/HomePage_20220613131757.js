import React from "react";
import Image from "next/image";
import home from "./assets/home.jpg";
import logo from "./assets/logo.svg";

const HomePage = () => {
  return (
    <div>
      <Image src={home} layout="responsive" height={100} />
    </div>
  );
};

export default HomePage;
