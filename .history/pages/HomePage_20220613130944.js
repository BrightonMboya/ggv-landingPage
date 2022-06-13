import React from "react";
import Image from "next/image";
import home from "./assets/home.jpg";
import logo from "./assets/logo.svg";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: "url(" + `${require("./assets/home.jpg")}` + ")",
        objectPosition: "cover",
        height: "100vh"
      }}
      // className="bg-gradient-to-bl from-black to-slate"
    >
      <div style={{ height: "100vh" }}>
        <Image src={home} className="object-cover" />
      </div>
    </div>
  );
};

export default HomePage;
