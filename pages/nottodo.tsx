import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/solid'
import Navbar from '../src/Components/Navbar'
import { InferGetServerSidePropsType } from 'next'
import { GraphQLClient } from 'graphql-request'

const NotTodo = ({
  todoItems,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <div className="relative bg-black">
        <Navbar />
        <div className="relative h-screen w-full bg-black text-center text-white">
          <div className="relative h-screen">
            <div className=" mx-auto w-full  flex-row  space-y-5 px-4">
              <h1 className="px-4 font-sans text-3xl sm:text-3xl lg:text-5xl font-bold uppercase text-teal-300">
                Things not to do!{' '}
              </h1>
              <p className="px-5 pt-10 text-xl sm:text-2xl md:text-4xl font-bold uppercase pb-10 ">
                Do not forget to{' '}
                <span className="italic text-teal-300">go do something...</span>
              </p>{' '}
              <div className="relative hidden w-full flex-row lg:block">
                <p className="pt-10 text-xl text-gray-300">Resize Screen...</p>
                <div className="absolute mx-auto hidden w-full items-center justify-between space-x-12 lg:flex">
                  <ArrowLeftIcon className="h-10 w-10 " />
                  <ArrowRightIcon className="h-10 w-10 " />
                </div>
              </div>
            </div>{' '}
            <div className="relative h-96 w-full flex-1 sm:hidden">
              <Image
                src={todoItems[3].image[0].url}
                layout="fill"
                className="absolute object-cover"
                alt="Cool morphing shape image"
              />
            </div>
            <div className="relative hidden h-96 w-full flex-1 sm:flex  md:hidden">
              <Image
                src={todoItems[3].image[1].url}
                layout="fill"
                className="absolute object-cover"
                alt="Cool morphing shape image"
              />
            </div>
            <div className="relative hidden h-96 w-full flex-1 md:flex lg:hidden">
              <Image
                src={todoItems[3].image[2].url}
                layout="fill"
                className="absolute object-cover"
                alt="Cool morphing shape image"
              />
            </div>
            <div className="relative hidden h-96 w-full flex-1 lg:flex xl:hidden">
              <Image
                src={todoItems[3].image[3].url}
                layout="fill"
                className="absolute object-cover"
                alt="Cool morphing shape image"
              />
            </div>
            <div className="relative hidden h-96 w-full flex-1 xl:flex ">
              <Image
                src={todoItems[3].image[4].url}
                layout="fill"
                className="absolute object-cover"
                alt="Cool morphing shape image"
              />
            </div>{' '}
            <div className="absolute bottom-20 w-full  bg-black px-5 pb-10">
              <Link href="/">
                <a target="/">
                  <button className=" mx-auto w-full max-w-3xl  rounded-full border-4 border-teal-300  bg-awesome-image-1 py-2 text-center font-sans font-bold uppercase text-white shadow-lg shadow-teal-300 hover:text-white hover:shadow-violet-400 ">
                    Go Back
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotTodo
export async function getServerSideProps() {
  // remove link and use URLPOINT inside .env variable in production. Errors defining 'types' will patch later.

  const UrlPoint = process.env.ENDPOINT
  const graphcms = new GraphQLClient(
    'https://api-us-west-2.graphcms.com/v2/cl29lbesw19f901z98lsl6c0k/master'
  )

  const { todoItems } = await graphcms.request(
    `{
        todoItems {
          name
          slug
         image {
           id
          url
          fileName
          
        
         }
      
        }
      }`
  )
  console.log(todoItems)

  return {
    props: {
      todoItems,
    },
  }
}
