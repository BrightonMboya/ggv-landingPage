import React from "react";
import Image from "next/image";
import home from "./assets/home.jpg";
import logo from "./assets/logo.svg";

const HomePage = () => {
  return (
    <div>
      <div style={{ height: "100vh" }}>
        <Image src={home} className="object-cover" />
      </div>
    </div>
  );
};

export default HomePage;
