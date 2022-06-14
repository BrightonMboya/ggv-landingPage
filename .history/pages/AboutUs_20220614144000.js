import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const AboutUs = () => {
  return (
    <div className={styles.global}>
      <Head>
        <title>Welcome to GGV</title>
        <meta
          name="description"
          content="Your Gateway to environmental tourism"
        />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Syne:wght@400;500;600;700&display=swap');
        </style>
      </Head>
      <div className={`${styles.bgWrap} ${styles.bg}`}>
        <Image
          src="/about.jpg"
          layout="fill"
          // width={900}
          // height={800}
          objectFit="cover"
          quality={100}
        />
        <div className={styles.content}>
          <h2 className="text-white lg:text-4xl text-center text-2xl">
            About Us
          </h2>
          <p className="text-white lg:text-xl text-center text-xl">
            Welcome to Global Green Visa, a gateway to environmental tourism.
            Working closely with national and International partners, GGV
            assists governments to deliver the environmental and climate
            benefits promised in the Paris Accords.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
