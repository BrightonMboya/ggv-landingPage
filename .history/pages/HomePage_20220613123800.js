import React from "react";
import home from "./assets/home.jpg";
import logo from "./assets/logo.svg";

const HomePage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${home})`, objectPosition: "cover" }}
      className="bg-gradient-to-bl from-black to-slate"
    >
      <div className="float top-0">
        <img src={logo} />
      </div>
    </div>
  );
};

export default HomePage;
