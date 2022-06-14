import Image from "next/image";
import styles from "../styles/Home.module.css";
// import home from "./assets/home.jpg";

const AboutUs = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div className={styles.bgWrap}>
        <Image
          src="/about.jpg"
          layout="responsive"
          width="100%"
          height="100%"
          objectFit="cover"
          quality={50}
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

export default AboutUs;