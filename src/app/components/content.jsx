import Image from "next/image";
import typography from "../../../public/images/image02.svg";
import image01 from "../../../public/images/image01.png";
import { motion } from "framer-motion";
import { fadeInOut } from "../utils/animations";

export default function Content({ isOpen }) {
  return (
    <>
      <motion.div
        variants={fadeInOut}
        animate={isOpen ? "enter" : "exit"}
        className="bg-black opacity-0 absolute z-20 inset-0"
      ></motion.div>
      <div className="absolute w-screen h-screen -top-24 -right-4 z-10">
        <Image src={typography} alt="exhibition information" fill />
      </div>
      <div className="hidden md:inline absolute -bottom-52 left-1/2 -translate-x-1/2">
        <Image
          src={image01}
          alt="exhibition information"
          style={{ minWidth: 400, minHeight: 300 }}
          className="ovject-fill"
        />
      </div>
    </>
  );
}
