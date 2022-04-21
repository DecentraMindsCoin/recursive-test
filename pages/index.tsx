import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Todos } from '../src/Components/Todos'

const Home: NextPage = () => {
  return (
    <div className="relative bg-gray-300">
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Recursive Challenge Todo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="w-3/4 rounded-xl border-4 border-cyan-400 bg-black bg-opacity-90 py-10">
          <Todos  />
        </div>
      </div>{' '}
    </div>
  )
}

export default Home


