import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import home from "../public/home.jpg";

const HomePage = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div className={styles.bgWrap}>
        <Image
          src={home}
          layout="responsive"
          width={700}
          height={475}
          objectFit="cover"
          quality={100}
        />
      </div>
      <p className="text-white text-3xl">
        Image Component
        <br />
        as a Background
      </p>
    </div>
  );
};

export default HomePage;
