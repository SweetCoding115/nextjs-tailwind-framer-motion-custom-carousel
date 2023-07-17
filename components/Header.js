import { useState } from 'react';
import logo from "../public/vercel.svg"
import Image from 'next/image';
import { useRouter } from 'next/router';

function Header({hello}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { asPath } = router;

  const handleClick = () => {
    router.push(hello);
    setIsOpen(!isOpen);
  }

  const handleSubClick = (path) => {
    setIsOpen(!isOpen);
    router.push(path)
  }

  return (
    <nav className="flex w-full h-full items-center justify-between lg:justify-center flex-wrap text-white">
      <div className="flex text-white lg:absolute lg:left-10">
        <Image src={logo} className="w-20 h-20 mr-2 invert" alt="Logo" />
      </div>
      <div className="visible lg:invisible h-20 items-center flex">
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
      <div className={`w-full block lg:flex lg:items-center w-full transition duration-300 ease-in-out lg:w-auto ${isOpen ? "block" : "hidden"}`}>
        <div className="text-sm lg:items-center absolute lg:relative right-0 w-full sm:w-auto lg:w-full bg-white/20 lg:bg-transparent shadow-[0_5px_20px_-5px_rgba(255,255,255,0.3)] lg:shadow-none pl-4 pb-4 lg:p-0 rounded-b-xl lg:rounded-none">
          <div onClick={handleClick} className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 ${asPath === "/test" ? 'border-b-2 border-white': ''}`}>
            Test Page
          </div>
          <div onClick={()=>handleSubClick('/apartments')} className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 ${asPath === "/apartments" ? 'border-b-2 border-white': ''}`}>
            Apartments
          </div>
          <div onClick={()=>handleSubClick('/pent-houses')} className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 ${asPath === "/pent-houses" ? 'border-b-2 border-white': ''}`}>
            Penthouses
          </div>
          <div onClick={()=>handleSubClick('/town-houses ')} className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 ${asPath === "/town-houses" ? 'border-b-2 border-white': ''}`}>
            Townhouses 
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;