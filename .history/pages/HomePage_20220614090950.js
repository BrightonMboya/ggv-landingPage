import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const HomePage = () => {
  return (
    // <div className="">
    //   <div className={`${styles.bgWrap} ${styles.bg}`}>
    //     <Image
    //       src="/home.jpg"
    //       layout="responsive"
    //       width={900}
    //       height={800}
    //       objectFit="cover"
    //       quality={100}
    //     />
    //     <div className={styles.content}>
    //       <h2 className="text-white lg:text-4xl text-center text-2xl">
    //         Global Green Visa
    //       </h2>
    //       <p className="text-white lg:text-xl text-center text-md">
    //         Welcome to Global Green Visa, a gateway to environmental tourism
    //       </p>
    //     </div>
    //   </div>
    // </div>

    <Wrapper className="w-5/6">
      <Head>
        {/* <!--syne font--> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <h1 className="text-5xl font-bold pb-10 sm:text-6xl">About Us</h1>
      </div>
      <p className="text-xl leading-loose sm:text-3xl sm:leading-loose">
        Welcome to Global Green Visa, a gateway to environmental tourism.
        Working closely with national and International partners, GGV assists
        governments to deliver the environmental and climate benefits promised
        in the Paris Accords.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Syne", sans-serif;
`;

export default HomePage;

// className="absolute lg:top-[50%] top-[6%]"
// className="lg:justify-center lg:items-center sm:h-0 lg:flex lg:h-[100vh]"
