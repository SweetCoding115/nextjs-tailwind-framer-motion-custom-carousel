import Image from "next/image"
import { Inter } from 'next/font/google'
import { useRouter } from "next/router"

const inter = Inter({ subsets: ['latin'] })

const ApartmentPage = () => {
  const router = useRouter()
  const { query } = router
  console.log(query['img-number'])
  return (
    <div className="flex flex-col items-center max-w-5xl max-h-screen h-[100vh] justify-around text-white">
      <div className="relative flex place-items-center">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="https://res.cloudinary.com/zeit-inc/image/upload/c_scale%2Cw_1920/nextconf-photos/Sexton_Vercel_3015.jpg"
          alt="Next.js Logo"
          width={1920}
          height={1080}
          priority
        />
      </div>

      <h1>
        This is a test page.😁
      </h1>
    </div>
  )
}

export default ApartmentPage
