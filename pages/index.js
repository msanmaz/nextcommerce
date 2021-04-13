import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Header'
import HomeScreen from '../screens/HomeScreen'


export default function Home() {
  return (
    <div>
      <Head>
        <title>1.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <HomeScreen/>


    </div>
  )
}
