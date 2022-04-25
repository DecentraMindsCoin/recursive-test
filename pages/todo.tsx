import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/solid'
import SubButton from '../src/Components/SubForm/SubButton'
import Navbar from '../src/Components/Navbar'
import { GraphQLClient } from 'graphql-request'
import { InferGetServerSidePropsType } from 'next'

const styles = {
  p__todo:
    'pt-10 text-lg sm:text-2xl md:text-3xl lg:text-4xl hover:text-black hover:bg-awesome-image-2 cursor-pointer',
}

const Todo = ({
  todoItems,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <div className="relative bg-black">
        {' '}
        <Navbar />
        <div className="relative h-screen w-full bg-black text-center font-bold  text-white">
          <div className="relative h-screen">
            <div className="absolute top-1/3 mx-auto w-full  flex-row  space-y-5 px-4  ">
              <h1 className="text-center font-sans text-7xl font-bold uppercase text-teal-300 ">
                Other Things to do!{' '}
              </h1>
              <div className="relative w-full ">
                <div className="uppercase">
                  <p className={styles.p__todo}>
                    Do the things your{' '}
                    <span className="font-bold italic text-teal-300 ">
                      passionate about...
                    </span>
                  </p>
                  <br />
                  <p className={styles.p__todo}>
                    Do the things that{' '}
                    <span className="font-bold italic text-teal-300 ">
                      benefit humanity...
                    </span>
                  </p>
                  <br />
                  <p className={styles.p__todo}>
                    Do the things that{' '}
                    <span className="font-bold italic text-teal-300 ">
                      make you happy...
                    </span>
                  </p>
                  <br />
                  <p className={styles.p__todo}>
                    Do the things{' '}
                    <span className="font-bold italic text-teal-300 ">
                      that you love...
                    </span>
                  </p>
                  <Link href="https://www.decentraminds.com/hireme">
                    <a>
                      {' '}
                      <p className={`${styles.p__todo}  `}>
                        Hire{' '}
                        <span className="rounded-full border-2 p-3 font-bold italic hover:text-white  text-teal-300 hover:bg-awesome-image-1 ">
                          Me!
                        </span>
                      </p>
                    </a>
                  </Link>

                  <br />
                </div>

                <div className="relative hidden w-full flex-row lg:block">
                  <p className="pt-10 text-sm  uppercase text-violet-400">
                    Resize Screen...
                  </p>
                </div>

                <div className="absolute mx-auto hidden w-full items-center justify-between space-x-12 lg:flex">
                  <ArrowLeftIcon className="h-10 w-10 " />
                  <ArrowRightIcon className="h-10 w-10 " />
                </div>
              </div>
            </div>{' '}
            <div className="relative h-96 w-full flex-1 sm:hidden">
              <Image
                src={todoItems[2].image[0].url}
                layout="fill"
                className="absolute object-cover"
                alt="Cool morphing shape image"
              />
            </div>
            <div className="relative hidden h-96 w-full flex-1 sm:flex  md:hidden">
              <Image
                src={todoItems[2].image[0].url}
                layout="fill"
                className="absolute object-cover"
                alt="Cool morphing shape image"
              />
            </div>
            <div className="relative hidden h-96 w-full flex-1 md:flex lg:hidden">
              <Image
                src={todoItems[2].image[1].url}
                layout="fill"
                className="absolute object-cover"
                alt="Cool morphing shape image"
              />
            </div>
            <div className="relative hidden h-96 w-full flex-1 lg:flex xl:hidden">
              <Image
                src={todoItems[2].image[2].url}
                layout="fill"
                className="absolute object-cover"
                alt="Cool morphing shape image"
              />
            </div>
            <div className="relative hidden h-96 w-full flex-1 xl:flex ">
              <Image
                src={todoItems[2].image[3].url}
                layout="fill"
                className="absolute object-cover"
                alt="Cool morphing shape image"
              />
            </div>{' '}
          </div>{' '}
          <div className="bg-black px-5 pb-10">
            <Link href="/">
              <a target="/">
                <button className=" mx-auto w-full max-w-3xl  rounded-full border-4 border-teal-300   py-2 text-center font-sans font-bold uppercase shadow-lg shadow-teal-300 bg-awesome-image-1 text-white hover:text-white hover:shadow-violet-400 ">
                  Go Back
                </button>
              </a>
            </Link>
          </div>
          <div className="w-full flex-row bg-black">
            <h1 className="w-full text-center text-2xl uppercase text-teal-300">
              Keep Doing...
            </h1>
            <SubButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo
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
