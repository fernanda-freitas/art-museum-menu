import Image from "next/image";
import logotype from "../../../public/images/logotype.svg";
import logotypered from "../../../public/images/logotypered.svg";

export default function Nav({ isOpen, handleMenu }) {
  const toggleMenu = () => {
    handleMenu();
  };

  return (
    <div
      onClick={toggleMenu}
      className="absolute w-full left-0 top-0 z-50 flex justify-between p-8"
    >
      <Image
        src={isOpen ? logotypered : logotype}
        width={40}
        height={30}
        alt="logotype"
      />
      <span
        className={`uppercase text-base hover:cursor-pointer ${
          isOpen ? "text-crimson" : "text-black"
        }`}
      >
        Menu
      </span>
    </div>
  );
}
