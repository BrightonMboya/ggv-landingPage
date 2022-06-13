import React from "react";
import home from "./assets/home.jpg";

const HomePage = () => {
  return (
    <div style={{ backgroundImage: `url(${home})`, objectPosition: "cover" }}>
      HomePage
    </div>
  );
};

export default HomePage;
