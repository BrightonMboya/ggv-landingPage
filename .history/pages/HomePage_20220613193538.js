import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const HomePage = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
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
      {/* <p className="text-white text-3xl">
        Image Component
        <br />
        as a Background
      </p> */}
    </div>
  );
};

export default HomePage;
