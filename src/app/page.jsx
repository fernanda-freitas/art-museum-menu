"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import image03 from "../../public/images/image03.jpg";
import menubg02 from "../../public/images/menubg02.svg";

import Nav from "./components/nav";
import Content from "./components/content";
import FirstLayerMenu from "./components/firstLayerMenu";

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
      <Content />
      <FirstLayerMenu isOpen={isOpen} />
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
