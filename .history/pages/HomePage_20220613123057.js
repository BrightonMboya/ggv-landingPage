import React from "react";
import home from "./assets/home.jpg";

const HomePage = () => {
  return (
    <div style={{ backgroundImage: `url(${home})`, objectPosition: "cover" }}>
      <div></div>
    </div>
  );
};

export default HomePage;
