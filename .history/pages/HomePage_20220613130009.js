import React from "react";
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
        <img src={logo} />
        <h3>Hello yolo</h3>
      </div>
    </div>
  );
};

export default HomePage;
