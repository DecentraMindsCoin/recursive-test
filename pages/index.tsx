import Head from 'next/head'
import Image from 'next/image'
import { Todos } from '../src/Components/Todos'
import { GraphQLClient } from 'graphql-request'
import ImageSlider from '../src/Components/ImageSlider'
import SPA from '../src/Components/SPA'

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
const Home = ({ todoItems }: PropType) => {

  return (
    <div className="bg-black h-full relative overflow-auto">
      <Head>
        <title>Recursive Challenge Todo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative flex h-screen flex-col items-center justify-center bg-black py-2">
    <ImageSlider />

        <div className="absolute h-full w-full border-t-violet-400 shadow-xl shadow-violet-400 border-b-violet-400 border-8 border-teal-300 bg-black bg-opacity-50 py-10 ">
          <h1 className="py-10 text-center font-mono text-5xl font-bold uppercase  text-teal-300">
            Lets Go Deep!
          </h1>
          <div className="flex-row">
            <div className="mx-auto max-w-5xl py-10 px-5  text-left font-mono text-xl font-extralight tracking-widest text-white md:text-4xl ">
              The deeper we go the more we discover, there is no more time to
              ponder! See how deep you can go and what you were ment to find by
              moving closer to your true self...
              <div className="py-20 text-center">
                <span className="text-violet-400 ">
                  Enter Things You {' '}
                  <span className="italic leading-loose underlin text-black bg-black   py-1 px-2 rounded-full border-2 border-white bg-awesome-image-2">Must Do</span> Before You
                  Die!
                </span>
              </div>
            </div>
          </div>
   <SPA />

         
          {/* <Todos /> */}
        </div>
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  // const urlPoint = process.env.ENDPOINT
  const graphcms = new GraphQLClient("https://api-us-west-2.graphcms.com/v2/cl29lbesw19f901z98lsl6c0k/master")

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
