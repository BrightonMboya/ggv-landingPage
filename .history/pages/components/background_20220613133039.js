import Image from "next/image";
import ViewSource from "./ViewSource";
import home from "../assets/home.jpg";

const Background = () => {
  return (
    <div>
      <Image src={home} layout="responsive" objectFit="cover" quality={100} />
    </div>
  );
};

export default Background;
