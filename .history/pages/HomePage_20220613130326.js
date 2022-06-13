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
      <div className="float top-0">
        <Image src={home} fill="100vh" />
        <h3>Hello yolo</h3>
      </div>
    </div>
  );
};

export default HomePage;
