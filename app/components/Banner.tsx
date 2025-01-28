"use client";
import Image from "next/image";

const Banner = ({ image }: BannerProps) => {
  return (
    <>
      <div className="imageContainer mt-4">
        <Image src={image} alt="Banner" fill className="image" />
      </div>
    </>
  );
};

export default Banner;
