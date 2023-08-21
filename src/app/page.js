"use client";
import Image from "next/image";
import logotype from "../../public/images/logotype.svg";
import logotypered from "../../public/images/logotypered.svg";
import image01 from "../../public/images/image01.png";
import image03 from "../../public/images/image03.jpg";
import typography from "../../public/images/image02.svg";
import menubg01 from "../../public/images/menubg01.svg";
import { useState } from "react";

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

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-creme">
      {/* 1rd layer */}
      <div className="absolute w-full left-0 top-0 z-20 flex justify-between p-8">
        <Image src={logotype} alt="logotype" />
        <span
          onClick={handleOpen}
          className="uppercase text-base hover:cursor-pointer"
        >
          Menu
        </span>
      </div>
      <div className="absolute -top-24 -right-4 w-screen h-screen z-10">
        <Image
          src={typography}
          alt="exhibition information"
          className="w-full h-full"
        />
      </div>
      <div className="hidden md:inline absolute -bottom-52 left-1/2 -translate-x-1/2">
        <Image
          src={image01}
          alt="exhibition information"
          style={{ minWidth: 400, minHeight: 300 }}
          className="ovject-fill"
        />
      </div>
      {/* 2rd layer */}
      {isOpen && (
        <>
          <div className="absolute inset-0 bottom-16 z-30">
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
          </div>
          {/* 3rd layer */}
          <div className="absolute inset-0 bottom-40 bg-creme z-40">
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
              <ul className="md:w-1/2 pt-44 px-8">
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
              <div className="relative hidden md:inline-flex md:w-1/2 px-8 border-l border-opacity-30 border-crimson">
                <Image
                  src={image03}
                  alt="menu image"
                  fill
                  className="py-8 px-40 object-cover"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
