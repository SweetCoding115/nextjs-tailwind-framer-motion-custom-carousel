import Image from "next/image";

const CarousalItem = ({ item, width }) => {
  return (
    <div
      className="inline-flex items-start w-full h-full"
      style={{ width: width}}
    >
      <Image
        src={item.src}
        alt=""
        width={2500}
        height={1400}
        className="h-full"
      />
    </div>
  );
};
export default CarousalItem;
