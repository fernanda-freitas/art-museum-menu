import Image from "next/image";
import { motion } from "framer-motion";
import menubg01 from "../../../public/images/menubg01.svg";

export default function FirstLayerMenu({ isOpen }) {
  const firstLayer = {
    initial: { y: -1000 },
    enter: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.08, 0.65, 0.53, 0.96],
      },
    },
    exit: {
      y: -1000,
      transition: {
        duration: 0.8,
        delay: 0.1,
        ease: [0.08, 0.65, 0.53, 0.96],
      },
    },
  };

  return (
    <motion.div
      variants={firstLayer}
      initial="initial"
      animate={isOpen ? "enter" : ""}
      exit="exit"
      className="absolute inset-0 bottom-10 z-30 -translate-y-3/4"
    >
      <div className="absolute bottom-6 right-8 flex items-center gap-x-8 z-30">
        <span className=" text-xl font-light text-creme">Work with us</span>
        <button
          type="button"
          className="text-crimson bg-creme px-5 py-2 rounded-full"
        >
          Apply
        </button>
      </div>
      <Image
        src={menubg01}
        alt="menu background"
        className="bg-crimson object-cover"
        fill
      />
    </motion.div>
  );
}
