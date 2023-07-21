import { useRef, useEffect } from 'react';

const TextCarousel = ({ card, index, activeIndex, className, isHeader }) => {
  const childRef = useRef(null);
  const parentRef = useRef(null);
  useEffect(() => {
    if (parentRef.current && childRef.current) {
      const childHeight = childRef.current.offsetHeight;
      parentRef.current.style.height = `${childHeight / card.length}px`;
    }
  });
  return (
    <div ref={parentRef} className={className}>
      <p
        ref={childRef}
        className={
          `leading-normal relative transition duration-1500 flex flex-col
          ${isHeader ? 
            'font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-200 to-pink-600'
            : ''
          }`
        }
        style={{ transform: `translateY(${-100*(activeIndex/card.length)}%)`}}
      >
        {card.map((item, i) => (
          <span key={`text_carousel_${i}`}>
            {item[index]}
          </span>
        ))}
      </p>
    </div>
  );
};
export default TextCarousel;
