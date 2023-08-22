import Image from "next/image";

export default function Nav(src) {
  return (
    <div className="absolute w-full left-0 top-0 z-20 flex justify-between p-8">
      <Image src={src} alt="logotype" />
      <span className="uppercase text-base hover:cursor-pointer">Menu</span>
    </div>
  );
}
