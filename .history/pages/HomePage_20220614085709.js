import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="">
      <div className={`${styles.bgWrap} ${styles.bg}`}>
        <Image
          src="/home.jpg"
          layout="responsive"
          width={900}
          height={800}
          objectFit="cover"
          quality={100}
        />
        <div className={styles.content}>
          <h2 className="text-white lg:text-4xl text-center text-2xl">
            Global Green Visa
          </h2>
          <p className="text-white lg:text-xl text-center text-md">
            Welcome to Global Green Visa, a gateway to environmental tourism
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// className="absolute lg:top-[50%] top-[6%]"
// className="lg:justify-center lg:items-center sm:h-0 lg:flex lg:h-[100vh]"
