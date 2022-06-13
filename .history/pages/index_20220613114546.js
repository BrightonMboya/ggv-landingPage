import React from "react";
import styles from "../styles/Home.module.css";

const index = () => {
  return (
    <React.Fragment>
      <div className={styles.globals}>
        <section>
          <h1>First Section</h1>
        </section>
        <section>
          <h1>second Section</h1>
        </section>
        <section>
          <h1>Third Section</h1>
        </section>
        <section>
          <h1>Fourth Section</h1>
        </section>
      </div>
    </React.Fragment>
  );
};

export default index;
