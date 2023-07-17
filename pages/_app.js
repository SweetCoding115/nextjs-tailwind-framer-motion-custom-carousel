import '@/styles/globals.css';
import '../styles/transition.css';
import { Inter } from 'next/font/google'
import Transition from '@/components/Transition';
import Header from '@/components/Header';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  const { asPath } = useRouter()
  console.log(asPath)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start overflow-hidden ${inter.className}`}
    >
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex px-5 bg-white/20 shadow-[0_5px_20px_-5px_rgba(255,255,255,0.3)]">
        <Header hello={asPath == '/' ? '/test' : '/'}/>
      </div>
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </main>
  )
}
