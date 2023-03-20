import Head from 'next/head'
import Image from 'next/image'
import { Raleway} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Navigation, Projects, Text } from '@/componets'

const roboto = Raleway({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (

    
  <div className='w-full   bg-gray-900 ' >
  <div className={roboto.className} >

  <Navigation/>
  <Text/>
  </div>
  </div>
  )
}
