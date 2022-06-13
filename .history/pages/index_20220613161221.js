import React from "react";
import Fullpage, {
  FullpageSection,
  FullPageSections,
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
  const SectionStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "Center",
    alignItems: "center"
  };
  return (
    <div>
      <Fullpage>
        <FullpageSection style={{ height: "100vh" }}>
          <HomePage />
        </FullpageSection>

        <FullpageSection style={{ height: "100vh" }}>
          <AboutUs />
        </FullpageSection>

        <FullpageSection style={{ height: "100vh" }}>
          <Contactus />
        </FullpageSection>
      </Fullpage>
    </div>
  );
};
export default FullPageScroll;
