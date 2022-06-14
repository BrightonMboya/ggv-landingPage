import Image from "next/image";
import styles from "../styles/Home.module.css";
// import home from "./assets/home.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className={styles.bgWrap}>
        <Image
          src="/about.jpg"
          layout="responsive"
          // objectFit="cover"
          quality={100}
          width={700}
          height={475}
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
