import Image from "next/image";
import { bgWrap } from "./styles.module.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import home from "../assets/home.jpg";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const Background = () => {
  return (
    <div className={bgWrap}>
      <Image src={home} layout="responsive" objectFit="cover" quality={100} />
    </div>
  );
};

export default Background;
