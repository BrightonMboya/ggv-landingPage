import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
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

      <div className="flex flex-col items-center justify-center absolute top-0 left-0 right-0 ml-auto mr-auto w-100">
        <h2 className="text-white text-4xl">Global Green Visa</h2>
        <p className="text-white text-xl text-center">
          Welcome to Global Green Visa, a gateway to environmental tourism
        </p>
      </div>
    </div>
  );
};

export default HomePage;
