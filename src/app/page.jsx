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

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-creme">
      <Nav handleMenu={handleMenu} isOpen={isOpen} />
      <Content />
      <FirstLayerMenu isOpen={isOpen} />
      <SecondLayerMenu isOpen={isOpen} />
    </main>
  );
}
