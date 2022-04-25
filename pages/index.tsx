import Head from 'next/head'
import Image from 'next/image'
import { GraphQLClient } from 'graphql-request'
import ImageSlider from '../src/Components/ImageSlider'
import SPA from '../src/Components/SPA'
import { InferGetStaticPropsType } from 'next'
import HeroTypeWriter from '../src/Components/HeroTypreWriter'
import Navbar from '../src/Components/Navbar'

export type ItemsType = {
  id: string
  name: string
  image: string
  urlPoint: string
  url: string
  bgImage: string
}

export type PropType = {
  todoItems: ItemsType[]
  url: string
  bgImage: string
}
const Home = ({
  todoItems,
}: InferGetStaticPropsType<typeof getStaticSideProps>) => {
  return (
    <div className="relative h-screen  overflow-auto bg-black">
      <Head>
        <title>Recursive Challenge Todo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Navbar />
        <div className="flex h-full flex-col items-center justify-center bg-black">
          <ImageSlider />

          <div className="absolute h-full w-full border-8 border-teal-300 border-t-violet-400 border-b-violet-400 bg-black bg-opacity-50 py-10 shadow-xl shadow-violet-400 ">
            <h1 className="py-10 text-center font-mono text-5xl font-bold uppercase text-teal-300  md:text-6xl">
              <HeroTypeWriter />
            </h1>
            <div className="flex-row">
              <div className="mx-auto max-w-5xl py-10 px-5  text-left  font-sans text-3xl font-extrabold  uppercase text-white md:text-4xl">
                The deeper you go the more you discover, there is no more time
                to ponder! See how deep you can go, and see what can come from
                doing the things that make you happy.
                <div className="py-20 text-center">
                  <span className="text-2xl font-extrabold text-violet-400">
                    Enter Things you want {' '}
                    <span className="cursor-pointer rounded-full border-2 border-violet-400 bg-awesome-image-2 py-1 px-3 font-extrabold italic leading-loose text-black shadow-xl shadow-teal-300 hover:bg-awesome-image-3 hover:text-white hover:shadow-violet-400">
                      To do
                    </span>{' '}
                   while {''}
                    <span className="italic text-gray-300 ">
                       your alive!
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <SPA />

            {/* <Todos /> */}
          </div>
        </div>
      </>
    </div>
  )
}

export default Home

export async function getStaticSideProps() {
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
