import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className={`${styles.bgWrap} ${styles.bg}`}>
        <Image
          src="/home.jpg"
          layout="responsive"
          width={900}
          height={475}
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="absolute top-[50%] sm:top-0">
        <h2 className="text-white text-4xl text-center">Global Green Visa</h2>
        <p className="text-white text-xl text-center">
          Welcome to Global Green Visa, a gateway to environmental tourism
        </p>
      </div>
    </div>
  );
};

export default HomePage;
