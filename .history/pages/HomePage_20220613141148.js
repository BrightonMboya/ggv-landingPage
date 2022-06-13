import React from "react";
import Background from "./components/Background";
import home from "./assets/home.jpg";

const HomePage = () => {
  return (
    <div>
      <Image src={home} layout="responsive" objectFit="cover" quality={100} />
      <h3 className="text-4xl text-white">Hello world</h3>
    </div>
  );
};

export default HomePage;
