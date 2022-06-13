import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Contactus = () => {
  return (
    <div style={{ height: "100vh", width: "100%", display: "block" }}>
      <div className={styles.bgWrap}>
        <Image
          src="/contact.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          // width={700}
          // height={475}
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

export default Contactus;
