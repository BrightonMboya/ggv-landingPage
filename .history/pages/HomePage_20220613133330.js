import React from "react";
import Image from "next/image";
import Background from "./components/Background";

const HomePage = () => {
  return (
    <div>
      <Background />
      <h3 className="text-4xl text-white">Hello world</h3>
    </div>
  );
};

export default HomePage;
