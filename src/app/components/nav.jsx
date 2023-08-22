import Image from "next/image";
import logotype from "../../../public/images/logotype.svg";

export default function Nav({ handleMenu }) {
  const toggleMenu = () => {
    handleMenu();
  };

  return (
    <div
      onClick={toggleMenu}
      className="absolute w-full left-0 top-0 z-50 flex justify-between p-8"
    >
      <Image src={logotype} width={40} height={30} alt="logotype" />
      <span className="uppercase text-base hover:cursor-pointer text-crimson">
        Menu
      </span>
    </div>
  );
}
