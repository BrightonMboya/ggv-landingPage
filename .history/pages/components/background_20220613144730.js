import Image from "next/image";
import ViewSource from "./ViewSource";
import home from "../assets/home.jpg";
import { bgWrap } from "../../styles/Home.module.css";

const Background = () => {
  return (
    <div className={bg - wrap}>
      <Image src={home} layout="responsive" objectFit="cover" quality={100} />
    </div>
  );
};

export default Background;
