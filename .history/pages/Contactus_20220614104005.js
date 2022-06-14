import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Contactus = () => {
  return (
    <div className="">
      <div className={`${styles.bgWrap} ${styles.bg}`}>
        <Image
          src="/contact.jpg"
          layout="fill"
          // width={900}
          // height={800}
          objectFit="cover"
          quality={100}
        />
        <div className={styles.content}>
          <form action=""></form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
