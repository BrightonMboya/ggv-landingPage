import Image from "next/image";
import styles from "";
// import home from "./assets/home.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className={styles.bgWrap}>
        <Image src="/home.jpg" layout="fill" objectFit="cover" quality={100} />
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
