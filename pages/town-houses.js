import Image from "next/image"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const TownHousesPage = () => {
  return (
    <div className="flex flex-col items-center max-w-5xl max-h-screen h-[100vh] justify-around text-white">
      <div className="relative flex place-items-center">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <h1>
        This is a test page.😁
      </h1>
    </div>
  )
}

export default TownHousesPage
