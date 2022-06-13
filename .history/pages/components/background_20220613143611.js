import Image from "next/image";
import { bgWrap } from "./styles.module.css";
import styled from "styled-components";
import home from "../assets/home.jpg";

const Background = () => {
  return (
    <div className={bgWrap}>
      <Image src={home} layout="responsive" objectFit="cover" quality={100} />
    </div>
  );
};

export default Background;
