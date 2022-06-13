import React from "react";
import styled from "styled-components"
import Head from 'next/head';

const AboutUs = () => {
  return <Wrapper className="w-5/6">
    <Head>
      {/* <!--syne font--> */}
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600&display=swap" rel="stylesheet" />
    </Head>
    <div>
      <h1 className="text-6xl font-bold pb-10">About Us</h1>
    </div>
    <p className="text-3xl leading-loose">Welcome to Global Green Visa, a gateway to environmental tourism. Working closely with national and International partners,
      GGV assists governments to deliver the environmental and climate benefits promised in the Paris Accords.
    </p>
  </Wrapper>;
};

const Wrapper = styled.div`
  font-family: 'Syne', sans-serif;
`;
export default AboutUs;
