"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import menubg02 from "../../../public/images/menubg02.svg";

import { slideDown, staggerToRight, fadeScaleDown } from "../utils/animations";
import { useState } from "react";

export default function SecondLayerMenu({ isOpen }) {
  const [selectedImage, setSelectedImage] = useState("");

  const menu = [
    {
      title: "The museum",
      image: "image03.jpeg",
      delay: 0.9,
    },
    {
      title: "Exhibitions",
      image: "image04.jpeg",
      delay: 0.95,
    },
    {
      title: "Collections",
      image: "image05.jpeg",
      delay: 1.05,
    },
    {
      title: "Public",
      image: "image06.jpeg",
      delay: 1.2,
    },
  ];

  return (
    <motion.div
      variants={slideDown(0.2, 0.3)}
      initial="initial"
      animate={isOpen ? "enter" : "exit"}
      className="absolute inset-0 bottom-32 bg-creme z-40 -translate-y-full"
    >
      <div className="absolute inset-0">
        <div className="flex w-full h-full">
          <div className="relative md:w-1/2">
            <Image
              src={menubg02}
              alt="menu background"
              fill
              className="object-cover"
            />
            <ul className="pt-44 px-8">
              {menu.map((item, i) => {
                return (
                  <motion.li
                    onMouseEnter={() => setSelectedImage(item.image)}
                    custom={item.delay}
                    variants={staggerToRight}
                    initial="initial"
                    animate={isOpen ? "enter" : ""}
                    className="overflow-hidden relative font-reailge text-6xl lg:text-custom leading-snug text-crimson opacity-60 hover:cursor-pointer hover:opacity-100"
                    key={i}
                  >
                    {item.title}
                  </motion.li>
                );
              })}
            </ul>
          </div>
          <motion.div
            variants={fadeScaleDown}
            initial="initial"
            animate={isOpen ? "enter" : ""}
            className="relative border-l border-opacity-30 border-crimson origin-top"
          ></motion.div>
          <motion.div className="relative hidden md:inline-flex md:w-1/2 px-8">
            {selectedImage && (
              <Image
                src={`/images/${selectedImage}`}
                alt="menu image"
                fill
                className="pt-16 pb-8 px-40 object-cover"
              />
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
