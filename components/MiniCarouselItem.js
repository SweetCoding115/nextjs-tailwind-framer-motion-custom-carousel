import Image from "next/image";

const MiniCarouselItem = ({ item, width }) => {
  return (
    <div
      className="inline-flex items-start w-full h-full"
      style={{ width: width}}
    >
      <Image
        src={item}
        alt=""
        width={1080}
        height={1920}
        className="h-full w-full"
      />
    </div>
  );
};
export default MiniCarouselItem;
