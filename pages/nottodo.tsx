import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/solid'

const NotTodo = () => {
  return (
    <>
      <h1>
        <div className="relative h-screen w-full bg-black text-center text-white">
          <div className="relative h-screen">
            <div className="absolute top-1/3 mx-auto w-full  flex-row  space-y-5 px-4">
              <h1 className="font-sans text-7xl font-bold uppercase text-teal-300">
                Things not to do!{' '}
              </h1>
              <p className="pt-10 text-4xl">
                Do not forget to go do something...
              </p>{' '}
              <div className="w-full flex-row relative">
                        <p className="pt-10 text-xl text-gray-300">
                Resize Screen...
              </p>
              <div className='flex mx-auto w-full absolute justify-between space-x-12 items-center'>
                  <ArrowLeftIcon className='h-10 w-10 '/>
              <ArrowRightIcon className='h-10 w-10 '/>  
              </div>
              </div>
        
            
            </div>{' '}
            <div className="relative flex-1 h-96 w-full sm:hidden">
              <Image
                src="https://media.graphassets.com/QUGSOG7RQpSVx3KFJXFc"
                layout="fill"
                className="absolute object-cover"
              />
            </div>
            <div className="relative flex-1 h-96 w-full hidden sm:flex  md:hidden">
              <Image
                src="https://media.graphassets.com/ChKWCsyNSc2cPlUqvZ0b"
                layout="fill"
                className="absolute object-cover"
              />
            </div>
            <div className="relative flex-1 h-96 w-full hidden md:flex lg:hidden">
              <Image
                src="https://media.graphassets.com/E7FW2hfOTRSQsXLcbUoH"
                layout="fill"
                className="absolute object-cover"
              />
            </div>
            <div className="relative flex-1 h-96 w-full hidden lg:flex xl:hidden">
              <Image
                src="https://media.graphassets.com/m05cOYPGTNqwFsNSwGHs"
                layout="fill"
                className="absolute object-cover"
              />
            </div>
            <div className="relative flex-1 h-96 w-full hidden xl:flex 2xl:hidden ">
              <Image
                src="https://media.graphassets.com/FudPH1JSpOIpHGjjydN2"
                layout="fill"
                className="absolute object-cover"
              />
            </div>
            <div className="relative flex-1 h-96 w-full hidden 2xl:flex">
              <Image
                src="https://media.graphassets.com/spy0H023S62OaDIOts7q"
                layout="fill"
                className="absolute object-cover"
              />
            </div>
          </div>

          <Link href="/">
            <a target="/">
              <button className="absolute bottom-20 mx-auto w-40 rounded-full  border-4 border-white bg-awesome-image-2 py-1 text-center font-sans font-bold uppercase text-black hover:bg-awesome-image-3 hover:text-white ">
                Go Back
              </button>
            </a>
          </Link>
        </div>
      </h1>
    </>
  )
}

export default NotTodo
