import { useState } from 'react';
import logo from "../public/vercel.svg"
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { asPath } = router;

  const handleSubClick = (path) => {
    setIsOpen(!isOpen);
    router.push(path)
  }

  return (
    <nav className="header fixed top-0 left-0 right-0 backdrop-blur-sm flex w-full h-12 md:h-16 lg:h-20 items-center justify-between lg:justify-center flex-wrap text-white px-5">
      <Link href='/' className="flex text-white lg:flex-none h-full mr-2 items-center">
        {/* <Image src={logo} className="w-32 lg:w-36 invert" alt="Logo" /> */}
        <h1 className='text-2xl lg:text-4xl font-bold mr-3'>Ariteck</h1>
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      </Link>
      <div className="visible lg:invisible h-full items-center flex">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div className={`w-full block lg:flex-grow lg:flex lg:items-center w-full transition duration-300 ease-in-out lg:w-auto lg:flex lg:grow lg:justify-around ${isOpen ? "block" : "hidden"}`}>
        <div className="text-xl items-end absolute right-0 lg:relative w-full sm:w-auto lg:backdrop-filter-none backdrop-blur-sm bg-white/40 lg:bg-transparent shadow-[0_5px_20px_-5px_rgba(255,255,255,0.3)] lg:shadow-none pl-4 pb-4 lg:p-0 rounded-b-xl lg:rounded-none">
          <div onClick={()=>handleSubClick('/test')} className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 ${asPath === "/test" ? 'animate-bounce border-b-2 border-white': ''}`}>
            Test Page
          </div>
          <div onClick={()=>handleSubClick('/apartments')} className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 ${asPath === "/apartments" ? 'animate-bounce border-b-2 border-white': ''}`}>
            Apartments
          </div>
          <div onClick={()=>handleSubClick('/pent-houses')} className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 ${asPath === "/pent-houses" ? 'animate-bounce border-b-2 border-white': ''}`}>
            Penthouses
          </div>
          <div onClick={()=>handleSubClick('/town-houses ')} className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 ${asPath === "/town-houses" ? 'animate-bounce border-b-2 border-white': ''}`}>
            Townhouses 
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;