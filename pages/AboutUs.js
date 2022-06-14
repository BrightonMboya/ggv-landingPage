import React from "react";
import styled from "styled-components"
import Head from 'next/head';

const AboutUs = () => {
  return <Wrapper className="w-5/6 flex flex-col justify-center items-center">
    <Head>
      {/* <!--syne font--> */}
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600&display=swap" rel="stylesheet" />
    </Head>
    <div>
      <h1 className="text-5xl font-bold pb-10 sm:text-6xl">About Us</h1>
    </div>
    <p className="text-xl leading-loose sm:text-3xl sm:leading-loose">Welcome to Global Green Visa, a gateway to environmental tourism. Working closely with national and International partners,
      GGV assists governments to deliver the environmental and climate benefits promised in the Paris Accords.
    </p>
    <div className="flex flex-col justify-center items-center absolute bottom-2">
      <div className="flex justify-center items-center rounded-3xl border-white border-2 border-solid w-7 h-16">
        <hr className="rotate-90 border-l w-8" />
      </div>
      <p className="text-lg">Join Us</p>
    </div>

  </Wrapper>;
};

const Wrapper = styled.div`
  font-family: 'Syne', sans-serif;
`;
export default AboutUs;
