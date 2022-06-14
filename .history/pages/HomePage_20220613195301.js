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

      <div className="flex items-center justify-center absolute top-0 left-0">
        <h2 className="text-white text-4xl">Global Green Visa</h2>
        <p className="text-white text-xl">
          Welcome to Global Green Visa, a gateway to environmental tourism
        </p>
      </div>
    </div>
  );
};

export default HomePage;
