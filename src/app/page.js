"use client";
import { useState } from "react";
import Image from "next/image";
import { ease, motion } from "framer-motion";

import logotype from "../../public/images/logotype.svg";
import logotypered from "../../public/images/logotypered.svg";
import image01 from "../../public/images/image01.png";
import image03 from "../../public/images/image03.jpg";
import typography from "../../public/images/image02.svg";
import menubg01 from "../../public/images/menubg01.svg";
import menubg02 from "../../public/images/menubg02.svg";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const menu = [
    {
      title: "The museum",
      image: "image03.jpg",
    },
    {
      title: "Exhibitions",
      image: "image03.jpg",
    },
    {
      title: "Collections",
      image: "image03.jpg",
    },
    {
      title: "Public",
      image: "image03.jpg",
    },
  ];

  const firstLayer = {
    initial: { y: -800 },
    enter: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      y: -800,
      transition: {
        duration: 1.2,
        delay: 0.1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const secondLayer = {
    initial: { y: -800 },
    enter: {
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      y: -800,
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-creme">
      {/* Homepage */}
      <div className="absolute w-full left-0 top-0 z-20 flex justify-between p-8">
        <Image src={logotype} alt="logotype" />
        <span
          onClick={handleOpen}
          className="uppercase text-base hover:cursor-pointer"
        >
          Menu
        </span>
      </div>
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
      {/* 1rd layer */}
      <motion.div
        variants={firstLayer}
        initial="initial"
        animate={isOpen ? "enter" : ""}
        exit={isOpen ? "" : "exit"}
        className="absolute inset-0 bottom-10 z-30 -translate-y-3/4"
      >
        <div className="absolute bottom-6 right-8 flex items-center gap-x-8 z-30">
          <span className=" text-xl font-light text-crimson color-crimson">
            Work with us
          </span>
          <button
            type="button"
            className="text-pink bg-crimson px-5 py-2 rounded-full"
          >
            Apply
          </button>
        </div>
        <Image
          src={menubg01}
          alt="menu background"
          className="bg-pink object-cover"
          fill
        />
      </motion.div>
      {/* 2rd layer */}
      <motion.div
        variants={secondLayer}
        initial="initial"
        animate={isOpen ? "enter" : ""}
        exit={isOpen ? "" : "exit"}
        className="absolute inset-0 bottom-32 bg-creme z-40 -translate-y-full"
      >
        <div className="absolute inset-0">
          <div className="absolute w-full left-0 top-0 z-20 flex justify-between p-8">
            <Image src={logotypered} alt="logotype" />
            <span
              onClick={handleClose}
              className="uppercase text-base hover:cursor-pointer text-crimson"
            >
              Menu
            </span>
          </div>
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
                    <li
                      className="font-reailge text-6xl lg:text-custom leading-snug text-crimson opacity-60 hover:opacity-100 hover:cursor-pointer"
                      key={i}
                    >
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="relative hidden md:inline-flex md:w-1/2 px-8 border-l border-opacity-30 border-crimson">
              <Image
                src={image03}
                alt="menu image"
                fill
                className="pt-16 pb-8 px-40 object-cover"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
