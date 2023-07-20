import '@/styles/globals.css';
import '../styles/transition.css';
import { Inter } from 'next/font/google'
import Transition from '@/components/Transition';
import Header from '@/components/Header';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const { asPath } = router;
  return (
    <main
      // className={`flex h-[100vh] flex-col items-center justify-start overflow-scroll ${inter.className}`}
      className='w-[100vw] h-[100vh] flex flex-col justify-start items-center'
    >
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex bg-white/20 shadow-[0_5px_20px_-5px_rgba(255,255,255,0.3)]">
        <Header />
      </div>
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </main>
  )
}
