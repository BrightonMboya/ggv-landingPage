import Image from "next/image";
import ViewSource from "./ViewSource";
import home from "../assets/home.jpg";

const Background = () => {
  return (
    <div>
      <ViewSource pathname="pages/background.js" />
      <div>
        <Image src={home} layout="responsive" objectFit="cover" quality={100} />
      </div>
    </div>
  );
};

export default Background;
