import Image from "next/image";
import React, { useState } from "react";

export default function BlurImage({ image, alt }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      key={alt}
      alt={alt}
      src={image}
      fill={true}
      objectFit="cover"
      className={`
          duration-700 ease-in-out group-hover:opacity-75 ovverflow-hidden
          ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          })`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
