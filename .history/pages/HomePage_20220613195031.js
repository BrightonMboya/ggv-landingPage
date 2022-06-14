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
      <div className="flex items-center justify-center">
        <h2>Global Green Visa</h2>
        <p className="text-blue-500 text-3xl absolute top-0 left-0">
          Image Component as a Background
        </p>
      </div>
    </div>
  );
};

export default HomePage;
