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

// const FullPageScroll = () => {
//   const SectionStyle = {
//     height: "100vh",
//     width: "100%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   };
//   return (
//     <div>
//       <Fullpage>
//         <FullpageNavigation />
//         <FullpageSection style={SectionStyle}>
//           <HomePage />
//         </FullpageSection>

//         <FullpageSection style={SectionStyle}>
//           <AboutUs />
//         </FullpageSection>

//         <FullpageSection style={SectionStyle}>
//           <Contactus />
//         </FullpageSection>
//       </Fullpage>
//     </div>
//   );
// };

export default FullPageScroll;
