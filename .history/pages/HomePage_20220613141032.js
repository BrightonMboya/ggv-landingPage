import React from "react";
import Background from "./components/Background";
import home from "./assets/home.jpg";

const HomePage = () => {
  return (
    <div>
      <Background image={home} />
      <h3 className="text-4xl text-white">Hello world</h3>
    </div>
  );
};

export default HomePage;
