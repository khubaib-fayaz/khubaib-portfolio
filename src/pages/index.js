import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Navigation, Projects, Text } from '@/componets'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div className='w-full   bg-gray-900 ' >

  <Navigation/>
  <Text/>
  </div>
  )
}
