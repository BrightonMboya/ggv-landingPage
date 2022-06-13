import Image from "next/image";
import { bgWrap } from "./styles.module.css";

const Background = (image) => {
  return (
    <div className={bgWrap}>
      <Image src={image} layout="responsive" objectFit="cover" quality={100} />
    </div>
  );
};

export default Background;
