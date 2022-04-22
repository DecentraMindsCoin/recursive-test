import Head from 'next/head'
import Image from 'next/image'
import { Todos } from '../src/Components/Todos'
import { GraphQLClient } from 'graphql-request'

interface CoinType {
  id: string;
  name: string;
  url: any;
  image: string;
  items: string;
  item: any;
} 

interface PropType { 
  todoItems: [];
}
const Home = ({todoItems} :PropType) => {
const item = todoItems

console.log(item)
  return (
    <>
      <Head>
        <title>Recursive Challenge Todo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative flex h-screen flex-col items-center justify-center bg-black py-2">
        <div className='relative w-full h-96'>
<Image src={item[0].image[0].url} alt="" layout="fill" />
        </div>



       
        <div className="absolute h-full w-full rounded-xl border-4 border-cyan-400 bg-black bg-opacity-50 py-10 ">
          <h1 className="py-10 text-center font-mono text-3xl font-bold uppercase text-white">
            Lets Go Deep!
          </h1>
          <p className="mx-auto max-w-xl py-10 px-5 text-center font-mono text-sm font-bold uppercase text-white">
            The deeper we go the more we discover, there is no more time to
            ponder! See how deep you can go and what you were ment to find by
            widdling closer to you self...
          </p>
          <Todos item={item}/>
          {/* <Todos /> */}
        </div>
      </div>
    </>
  )
}

export default Home

export async function getServerSideProps() {
  // const url = process.env.ENDPOINT;
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
