"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";
import clsx from "clsx";

const ProductsContainer = ({
  tag,
  title,
  btn,
  header,
  products,
  pattern,
}: ProductsContainerProps) => {
  return (
    <div className="relative">
      {pattern && (
        <div className="bg-pattern-background w-full absolute top-0 bottom-0 left-0 right-0"></div>
      )}
      <div
        className={clsx(
          `${"bg-gradient-to-b from-blue-600 to-blue-400 py-6 pr-5 pl-9 text-white rounded-md"}
        ${title && "flex items-center"}`
        )}
      >
        {title ? (
          <div className="w-[300px] py-6 pr-9 pl-[2px] ml-6">
            <div className="bg-red-500 w-fit rounded-md py-1 px-2 text-sm mb-1">
              {tag}
            </div>
            <div className="text-[23px] font-medium w-56">{title}</div>
            <button className="border border-white rounded-md mt-6 py-2 px-[26px] text-xs flex items-center">
              <span>{btn}</span>
              <Image
                src="/left-arrow.svg"
                alt="Arrow"
                width={8}
                height={8}
                className="mr-2"
              />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between px-4 pb-4">
            <span className="text-sm">{header}</span>
            <Image src="/left-arrow.svg" alt="Arrow" height={8} width={8} />
          </div>
        )}

        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation]} //added
          navigation
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard key={item.id} data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsContainer;
