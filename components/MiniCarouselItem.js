import BlurImage from "./BlurImage";

const MiniCarouselItem = ({ item, width, alt }) => {
  return (
    <div
      className="inline-flex items-start w-full h-full relative"
      style={{ width: width}}
    >
      <BlurImage
        image={item.src}
        alt={'mini_' + alt}
      />
    </div>
  );
};

export default MiniCarouselItem;
