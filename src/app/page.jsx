"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import logotype from "../../public/images/logotype.svg";
import logotypered from "../../public/images/logotypered.svg";
import image01 from "../../public/images/image01.png";
import image03 from "../../public/images/image03.jpg";
import typography from "../../public/images/image02.svg";
import menubg01 from "../../public/images/menubg01.svg";
import menubg02 from "../../public/images/menubg02.svg";

import Nav from "./components/nav";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
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

  const secondLayer = {
    initial: { y: -1000 },
    enter: {
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: [0.08, 0.65, 0.53, 0.96],
      },
    },
    exit: {
      y: -1000,
      transition: {
        duration: 0.8,
        ease: [0.08, 0.65, 0.53, 0.96],
      },
    },
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-creme">
      {/* Homepage */}
      <Nav handleMenu={handleMenu} />
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
      {/* 2rd layer */}
      <motion.div
        variants={secondLayer}
        initial="initial"
        animate={isOpen ? "enter" : ""}
        exit="exit"
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
                    <li
                      className="font-reailge text-6xl lg:text-custom leading-snug text-crimson opacity-60 hover:cursor-pointer hover:opacity-100"
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
