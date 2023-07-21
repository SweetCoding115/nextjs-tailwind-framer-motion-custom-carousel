import CarousalItem from "./CarousalItem";
import MiniCarouselItem from "./MiniCarouselItem";
import { useEffect, useState, Fragment } from "react";
import NextArrow from '../public/next-arrow.png';
import Image from "next/image";
import SquigglyLines from "./SquigglyLines";
import TextCarousel from "./TextCarousel";
import Link from "next/link";
const Carousal = ({ card, subCard, className }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const [isSwipingPaused, setIsSwipingPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < -1) {
      newIndex = card.length - 1;
    } else if (newIndex >= card.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSwipingPaused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div
      className={`flex relative w-full h-full justify-between align-start shadow-xl shadow-white/10 ${className}`}
    >
      <div className="w-[20vw] bg-black"></div>
      <div
        className="w-[80vw] relative overflow-hidden"
      >
        <div
          onMouseEnter={() => setIsSwipingPaused(true)}
          onMouseLeave={() => setIsSwipingPaused(false)}
          className="inner whitespace-nowrap h-full transition duration-3000"
          style={{ transform: `translateX(${-activeIndex* 100}%)` }}
        >
          {card.map((child, i) =>  (
            <CarousalItem
              key={"carousel_" + i}
              item={child}
              width="100%"
            ></CarousalItem>
          ))}
        </div>
      </div>
      <div 
        className="left-[10vw] md:top-[10vw] top-[15vw] absolute flex"
      >
        <div className="w-[20vw] h-[35vw] overflow-hidden relative">
          <div
            onMouseEnter={() => setIsSwipingPaused(true)}
            onMouseLeave={() => setIsSwipingPaused(false)}
            className="inner whitespace-nowrap h-full transition duration-3000"
            style={{ transform: `translateX(${-activeIndex* 100}%)` }}
          >
            {subCard.map((item, i) => (
              <MiniCarouselItem
                key={'subcarousel_' + i}
                item={item}
                alt={i}
                width="100%"
              ></MiniCarouselItem>
            ))}
          </div>
        </div>
        <div className="relative w-[60vw] text-center items-center justify-between flex flex-col">
          <div className="flex flex-col">
            <span className="relative lg:text-9xl md:text-7xl sm:text-4xl text-3xl font-bold text-white leading-snug">
              <SquigglyLines />
              <TextCarousel card={card} activeIndex={activeIndex} index={'name'} isHeader={true} className="w-full overflow-hidden"/>
            </span>
            <div className="text-xs sm:text-xl md:text-2xl lg:text-3xl">
              <TextCarousel card={card} activeIndex={activeIndex} index={'description'} isHeader={false} className="w-full overflow-hidden"/>
              <TextCarousel card={card} activeIndex={activeIndex} index={'bio'} isHeader={false} className="w-full overflow-hidden"/>
            </div>
          </div>
          <div className="flex flex-grow w-full items-center justify-center">
            <Link href={`/apartments?img-number=${activeIndex + 1}`} className="glass btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
              hello
            </Link>
          </div>
        </div>
      </div>
      <div className="indicators px-2 right-0 fixed h-8 w-full bg-slate-300 bottom-0 flex justify-end items-center gap-3">
        <button
          className="prev-button"
          onClick={(e) => {
            updateIndex(activeIndex - 1);
          }}
        >
          <Image
            src={NextArrow}
            width={24}
            height={24}
            className="rotate-180"
            alt="Prev"
          />
        </button>
        {<p>{activeIndex + 1}</p>}
        <button
          className="next-button"
          onClick={(e) => {
            updateIndex(activeIndex + 1);
          }}
        >
          <Image
            src={NextArrow}
            width={24}
            height={24}
            alt="Prev"
          />
        </button>
      </div>
    </div>
  );
};
export default Carousal;
