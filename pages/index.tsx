import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Todos } from "../src/Components/Todos"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Todos />
    </div>
  )
}

export default Home
