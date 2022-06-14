import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Contactus = () => {
  return (
    <div>
      <div className={styles.bgWrap}>
        <Image
          src="/contact.jpg"
          layout="responsive"
          objectFit="cover"
          quality={100}
          width={700}
          height={475}
        />
      </div>
      <p className="text-blue-500 text-3xl">Image Component as a Background</p>
    </div>
  );
};

export default Contactus;
