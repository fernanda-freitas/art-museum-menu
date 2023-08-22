import Image from "next/image";
import { motion } from "framer-motion";
import menubg01 from "../../../public/images/menubg01.svg";
import { slideDown, fadeUpIn } from "../utils/animations";

export default function FirstLayerMenu({ isOpen }) {
  return (
    <motion.div
      variants={slideDown(0, 0.1)}
      initial="initial"
      animate={isOpen ? "enter" : "exit"}
      className="absolute inset-0 bottom-10 z-30 -translate-y-3/4 overflow-hidden"
    >
      <motion.div
        variants={fadeUpIn}
        initial="initial"
        animate={isOpen ? "enter" : ""}
        className="absolute right-8 flex items-center gap-x-8 z-30"
      >
        <span className=" text-xl font-light text-creme">Work with us</span>
        <button
          type="button"
          className="font-medium text-crimson bg-creme px-5 py-2 rounded-full hover:scale-110 transition duration-300"
        >
          Apply
        </button>
      </motion.div>
      <Image
        src={menubg01}
        alt="menu background"
        className="bg-crimson object-cover"
        fill
      />
    </motion.div>
  );
}
