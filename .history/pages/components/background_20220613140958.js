import Image from "next/image";
import home from "../assets/home.jpg";
import { bgWrap } from "./styles.module.css";

const Background = (image) => {
  return (
    <div className={bgWrap}>
      <Image src={home} layout="responsive" objectFit="cover" quality={100} />
    </div>
  );
};

export default Background;
