
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


import BingSearchNewsApi from './api/BingSearchNewsApi'



export default function Home() {

  return (
   <main>
  
    
    <BingSearchNewsApi />
    </main>
  )
}
