"use client";
import { useState } from "react";

import Nav from "./components/nav";
import Content from "./components/content";
import FirstLayerMenu from "./components/firstLayerMenu";
import SecondLayerMenu from "./components/secondLayerMenu";

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
      <Nav handleMenu={handleMenu} />
      <Content />
      <FirstLayerMenu isOpen={isOpen} />
      <SecondLayerMenu isOpen={isOpen} />
    </main>
  );
}
