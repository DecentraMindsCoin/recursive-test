import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { MenuAlt1Icon, XIcon, UserIcon } from "@heroicons/react/solid";

const NavLinks = [
  {
    linkName: "Vision",
    link: "/vision",
  },

  {
    linkName: "About Me",
    link: "/about",
  },
  {
    linkName: "Works",
    link: "/works",
  },
  {
    linkName: "Creations",
    link: "/creations",
  },

  // {
  //   linkName: "Videos",
  //   link: "/videos",
  // },
];

export const Navbar = () => {

  const styles = {
    chatButton: 'shadow-cyan-300 shadow-lg'
  }

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className=" absolute top-0 w-full overflow-x-hidden uppercase">
      <div className=" py-2 z-20 px-5 lg:flex items-center  bg-transparent bg-opacity-90 z-100 relative">
        <div className=" item-center h-12 w-12 relative ">
          <a className="relative" href="/">
            <div className="h-12 w-12 relative rounded-xl border-2 border-white">
              <Image
                layout="fill"
                objectFit="cover"
                className="cursor-pointer absolute rounded-xl  "
                alt="header-image"
                src='/favicon.ico'
              />
            </div>
          </a>
        </div>

        <button
          aria-label="top right"
          className="absolute hover:bg-awesome-image-2 hover:text-black outline-none active:bg-white transition duration-200 transform ease-in-out right-5 top-3 w-10 h-10 bg-purple-500 rounded lg:hidden text-gray-200   border-2 border-white"
          onClick={handleClick}
        >
          <div className={`${active ? "hidden " : "block"}  m-1 `}>
            <MenuAlt1Icon />
          </div>
          <div className={`${active ? "animate-spin-slow" : "hidden"}  m-1 `}>
            <XIcon />
          </div>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "w-full flex" : "hidden "
          }    w-full lg:block lg:w-auto mx-auto flex-shrink`}
        >
          <div className=" bg-opacity-50 shadow-black lg:bg-opacity-0 py-5 rounded-xl lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-center flex flex-col lg:h-auto px-10 ">
            <div className="lg:flex w-full">
              {NavLinks.map((nav, index) => (
                <div
                  key={index}
                  className="cursor-pointer border-b border-white lg:border-b-0"
                >
                  <Link href={nav.link}>
                    <div className="lg:inline-flex lg:w-auto px-2 pr-5 py-4 active:bg-purple-500 hover:pr-16  hover:bg-awesome-image-2 rounded-xl text-gray-200 font-bold items-center  justify-center  hover:text-gray-200 hover:scale-110 transition duration-200 transform ease-out">
                      <h1 id="glitch" className="text-gray-200  text-center">
                        {nav.linkName}
                      </h1>
                    </div>
                  </Link>
                </div>
              ))}
            </div>{" "}
            <div className="relative flex-row mx-auto  lg:flex py-10 lg:py-0 lg:pt-0">
              <div className="space-y-6 md:space-x-1 lg:space-y-0 lg:flex lg:pl-6">
                <Link href="/contact">
                  <button className={`${styles.chatButton} block transition lg:w-28 w-56 ease-in-out duration-400 border-2 border-purple-500 bg-white hover:scale-110 transform rounded-3xl text-sm z-100 item-center font-medium uppercase text-gray-700 py-2 `} >
                    <p className="">Lets Chat</p>
                  </button>
                </Link>
              </div>
              <div className="pt-5  lg:pl-10 lg:pt-0 ">
                <Link href="/hireme">
                  <button className="block w-56 lg:w-28 border-2 border-purple-500 transition  uppercase ease-in-out duration-200 bg-transparent hover:animate-none hover:scale-110 transform rounded-3xl text-sm z-100 item-center font-medium hover:bg-awesome-image-2 text-gray-200 py-2 shadow-cyan-300 shadow-lg">
                    Hire Me
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;