import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { MenuAlt1Icon, XIcon, UserIcon } from '@heroicons/react/solid'

const NavLinks = [
  {
    linkName: 'To Do..',
    link: '/todo',
  },

  {
    linkName: 'Not To Do..',
    link: '/nottodo',
  },
]

export const Navbar = () => {
  const styles = {
    chatButton: 'shadow-cyan-300 shadow-lg',
  }

  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <div className=" scrollbar-hidden top-0 w-full overflow-x-hidden uppercase">
      <div
        className={`${
          active ? 'bg-black bg-opacity-90 ' : 'bg-transparent'
        } z-100 relative z-20 items-center py-2  px-5 lg:flex`}
      >
        <div className=" item-center relative h-12 w-12 ">
          <a className="relative" href="/">
            <div className="relative h-12 w-12 rounded-xl border-2 border-white">
              <Image
                layout="fill"
                objectFit="cover"
                className="absolute cursor-pointer rounded-xl  "
                alt="header-image"
                src="/favicon.ico"
              />
            </div>
          </a>
        </div>

        <button
          aria-label="top right"
          className="absolute right-5 top-3 h-10 w-10 transform rounded border-2 border-white bg-purple-500 text-gray-200 outline-none transition duration-200 ease-in-out hover:bg-awesome-image-2 hover:text-black   active:bg-white lg:hidden"
          onClick={handleClick}
        >
          <div className={`${active ? 'hidden ' : 'block'}  m-1 `}>
            <MenuAlt1Icon />
          </div>
          <div className={`${active ? 'animate-spin-slow' : 'hidden'}  m-1 `}>
            <XIcon />
          </div>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? 'flex w-full' : 'hidden '
          }    mx-auto w-full flex-shrink lg:block lg:w-auto`}
        >
          <div className=" flex w-full flex-col items-center rounded-xl bg-opacity-50 py-5 px-10 shadow-black lg:ml-auto lg:inline-flex lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:bg-opacity-0 ">
            <div className="w-full text-white lg:flex ">
              {NavLinks.map((nav, index) => (
                <div
                  key={index}
                  className="cursor-pointer border-b border-white hover:text-black lg:border-b-0"
                >
                  <Link href={nav.link}>
                    <div className="transform items-center justify-center rounded-xl px-2 py-4 pr-5  font-bold transition duration-200 ease-out  hover:scale-110   hover:bg-awesome-image-2 hover:pr-16 active:bg-purple-500 lg:inline-flex lg:w-auto">
                      <h1 id="glitch" className="   text-center">
                        {nav.linkName}
                      </h1>
                    </div>
                  </Link>
                </div>
              ))}
            </div>{' '}
            <div className="relative mx-auto flex-row  py-10 lg:flex lg:py-0 lg:pt-0">
              <div className="space-y-6 md:space-x-1 lg:flex lg:space-y-0 lg:pl-6">
                <Link href="/todo">
                  <button
                    className={`${styles.chatButton} duration-400 z-100 item-center block w-56 transform rounded-3xl border-2 border-purple-500 bg-white py-2 text-sm font-medium uppercase text-gray-700 transition ease-in-out hover:scale-110 lg:w-28 `}
                  >
                    <p className="">Lets Chat</p>
                  </button>
                </Link>
              </div>
              <div className="pt-5  lg:pl-10 lg:pt-0 ">
                <Link href="/todo">
                  <button className="z-100 item-center block w-56 transform rounded-3xl  border-2 border-purple-500 bg-transparent py-2 text-sm font-medium uppercase text-gray-200 shadow-lg shadow-cyan-300 transition duration-200 ease-in-out hover:scale-110 hover:animate-none hover:bg-awesome-image-2 hover:text-black lg:w-28">
                    Hire Me
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar
