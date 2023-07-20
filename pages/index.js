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
import Mobile1 from '@/public/images/mobile_carousel_1.jpg';
import Mobile2 from '@/public/images/mobile_carousel_2.jpg';
import Mobile3 from '@/public/images/mobile_carousel_3.jpg';
import Carousal from '@/components/Carousal';

const Home = () => {
  
  const subCard = [
    Mobile1,
    Mobile2,
    Mobile3,
    Mobile1,
    Mobile2,
    Mobile3,
    Mobile1,
    Mobile2,
    Mobile3,
    Mobile2,
  ]
  const ImageArray = [
    {
      src:Image1,
      name: "Image1",
      description: "this is a description of Image1",
      bio: "this is a bio of Image1"
    },
    {
      src:Image2,
      name: "Image2",
      description: "this is a description of Image2",
      bio: "this is a bio of Image2"
    },
    {
      src:Image3,
      name: "Image3",
      description: "this is a description of Image3",
      bio: "this is a bio of Image3"
    },
    {
      src:Image4,
      name: "Image4",
      description: "this is a description of Image4",
      bio: "this is a bio of Image4"
    },
    {
      src:Image5,
      name: "Image5",
      description: "this is a description of Image5",
      bio: "this is a bio of Image5"
    },
    {
      src:Image6,
      name: "Image6",
      description: "this is a description of Image6",
      bio: "this is a bio of Image6"
    },
    {
      src:Image7,
      name: "Image7",
      description: "this is a description of Image7",
      bio: "this is a bio of Image7"
    },
    {
      src:Image8,
      name: "Image8",
      description: "this is a description of Image8",
      bio: "this is a bio of Image8"
    },
    {
      src:Image9,
      name: "Image9",
      description: "this is a description of Image9",
      bio: "this is a bio of Image9"
    },
    {
      src:Image10,
      name: "Image10",
      description: "this is a description of Image10",
      bio: "this is a bio of Image10"
    },
  ]
  return (
    <div className="flex flex-row items-start justify-between w-[100vw] h-[100vh] text-white">
      <Carousal card={ImageArray} subCard={subCard} className=''/>
    </div>
  )
}

export default Home
