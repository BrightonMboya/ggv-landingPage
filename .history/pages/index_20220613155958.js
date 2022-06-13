import React from "react";
import Fullpage, {
  FullPageSection,
  FullpageSections,
  FullpageNavigation
} from "@ap.cx/react-fullpage";
import styles from "../styles/Home.module.css";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import Contactus from "./Contactus";

// const index = () => {
//   return (
//     <React.Fragment>
//       <div className={`${styles.global} ${styles.container}`}>
//         <section className={`${styles.section}`}>
//           <HomePage />
//         </section>
//         <section className={`${styles.section}`}>
//           <AboutUs />
//         </section>
//         <section className={`${styles.section} ${styles.three}`}>
//           <Contactus />
//         </section>
//       </div>
//     </React.Fragment>
//   );
// };

const FullPageScroll = () => {
  return <div>
    <Fullpage>
      <FullpageSections
    </Fullpage>
  </div>;
};
export default FullPageScroll;
