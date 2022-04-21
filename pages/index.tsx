import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Todos } from '../src/Components/Todos'

const Home: NextPage = () => {
  return (
    <div className="relative bg-gray-300 ">
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Recursive Challenge Todo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="absolute h-screen w-full rounded-xl border-4 border-cyan-400 bg-black bg-opacity-90 py-10 ">
          <h1 className="py-10 text-center font-mono text-3xl font-bold uppercase text-white">
            The Awesome Todo App...
          </h1>
          <Todos />
        </div>
      </div>{' '}
    </div>
  )
}

export default Home
