import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import Header from '@/components/header/header'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
    <Header></Header>
   <h4>Home</h4>
   </>
  )
}
