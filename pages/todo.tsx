import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/solid'

const Todo = () => {
  return (
    <>
      <h1>
        <div className="relative h-screen w-full bg-black text-center text-white">
          <div className="relative h-screen">
            <div className="absolute top-1/3 mx-auto w-full  flex-row  space-y-5 px-4">
              <h1 className="font-sans text-7xl font-bold uppercase text-teal-300">
                Things to do!{' '}
              </h1>
              <div className="relative w-full">
                <div className="">
                  <p className="pt-10 sm:text-4xl text-lg">
                    Do the things your passionate about...
                  </p>
                  <br/>
                  <p className="pt-10 sm:text-4xl text-lg">
                    Do the things that benefit humanity...
                  </p>
                  <br/>
                  <p className="pt-10 sm:text-4xl text-lg">
                    Do the things that make you happy...
                  </p>
                  <br/>
                  <p className="pt-10 sm:text-4xl text-lg">
                    Do the things that you love...
                  </p>
                  <br/>
                </div>

                <div className="relative w-full flex-row">
                  <p className="pt-10 text-sm  text-teal-300">
                    Resize Screen...
                  </p>
                </div>

                <div className="absolute mx-auto flex w-full items-center justify-between space-x-12">
                  <ArrowLeftIcon className="h-10 w-10 " />
                  <ArrowRightIcon className="h-10 w-10 " />
                </div>
              </div>
            </div>{' '}
            <div className="relative h-96 w-full flex-1 sm:hidden">
              <Image
                src="https://media.graphassets.com/QUGSOG7RQpSVx3KFJXFc"
                layout="fill"
                className="absolute object-cover"
              />
            </div>
            <div className="relative hidden h-96 w-full flex-1 sm:flex  md:hidden">
              <Image
                src="https://media.graphassets.com/ChKWCsyNSc2cPlUqvZ0b"
                layout="fill"
                className="absolute object-cover"
              />
            </div>
            <div className="relative hidden h-96 w-full flex-1 md:flex lg:hidden">
              <Image
                src="https://media.graphassets.com/E7FW2hfOTRSQsXLcbUoH"
                layout="fill"
                className="absolute object-cover"
              />
            </div>
            <div className="relative hidden h-96 w-full flex-1 lg:flex xl:hidden">
              <Image
                src="https://media.graphassets.com/m05cOYPGTNqwFsNSwGHs"
                layout="fill"
                className="absolute object-cover"
              />
            </div>
            <div className="relative hidden h-96 w-full flex-1 xl:flex 2xl:hidden ">
              <Image
                src="https://media.graphassets.com/FudPH1JSpOIpHGjjydN2"
                layout="fill"
                className="absolute object-cover"
              />
            </div>
            <div className="relative hidden h-96 w-full flex-1 2xl:flex">
              <Image
                src="https://media.graphassets.com/spy0H023S62OaDIOts7q"
                layout="fill"
                className="absolute object-cover"
              />
            </div>
          </div>

          <Link href="/">
            <a target="/">
              <button className="absolute bottom-20 mx-auto w-40 rounded-full  border-4 border-teal-300 bg-awesome-image-2 py-1 text-center font-sans font-bold uppercase text-black hover:bg-awesome-image-3 hover:text-white ">
                Go Back
              </button>
            </a>
          </Link>
        </div>
      </h1>
    </>
  )
}

export default Todo
