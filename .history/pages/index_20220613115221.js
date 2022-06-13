import React from "react";
import styles from "../styles/Home.module.css";

const index = () => {
  return (
    <React.Fragment>
      <div className={`${styles.global} ${styles.container}`}>
        <section className={`${styles.section} ${styles.one}`}>
          <h1>First Section</h1>
        </section>
        <section className={`${styles.section} ${styles.two}`}>
          <h1>second Section</h1>
        </section>
        <section className={`${styles.section} ${styles.three}`}>
          <h1>Third Section</h1>
        </section>
        <section className={`${styles.section} ${styles.four}`}>
          <h1>Fourth Section</h1>
        </section>
      </div>
    </React.Fragment>
  );
};

export default index;
