import React from "react";
import styles from "../styles/Home.module.css";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import Contactus from "./Contactus";

const index = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <HomePage />
        <AboutUs />
        <Contactus />
      </div>
    </React.Fragment>
  );
};

export default index;
