import { Inter } from 'next/font/google';
import { useState, useRef } from "react";
import Image from "next/image";
import { ParallaxText } from "@/components/ParallaxText";
import { spring, useVariants } from "./config";
import { motion } from "framer-motion";
import Image1 from '@/public/images/AdobeStock_1.jpeg';
import Image2 from '@/public/images/AdobeStock_2.jpeg';
import Image3 from '@/public/images/AdobeStock_3.jpeg';
import Image4 from '@/public/images/AdobeStock_4.jpeg';
import Image5 from '@/public/images/AdobeStock_5.jpeg';
import Image6 from '@/public/images/AdobeStock_6.jpeg';
import Image7 from '@/public/images/AdobeStock_7.jpeg';
import Image8 from '@/public/images/AdobeStock_8.jpeg';
import Image9 from '@/public/images/AdobeStock_9.jpeg';
import Image10 from '@/public/images/AdobeStock_10.jpeg';

const inter = Inter({ subsets: ['latin'] })

const TestPage = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = useRef(null);

  const variants = useVariants(ref);

  function clickEnter() {
    setCursorText("Click");
    setCursorVariant("click");
  }

  function clickLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  const ImageArray = [
    Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10,
  ]
  return (
    <div ref={ref} className="flex flex-col items-center max-w-5xl max-h-screen h-[80vh] justify-around text-white">
      <ParallaxText>
        hello, I am Moriah Buckridge.
      </ParallaxText>
      <div className="relative flex place-items-center gap-3 flex flex-row">
        {/* <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        {ImageArray.map((src, i) => (
          <Image
            key={'Image_' + i}
            className="relative drop-shadow-[0_0_0.3rem_#ffffff70]"
            src={src}
            alt="Next.js Logo"
            // width={180}
            height={600}
            priority
          />
        ))}

      </div>

      <h1>
        This is a test page.😁
      </h1>
    </div>
  )
}

export default TestPage
