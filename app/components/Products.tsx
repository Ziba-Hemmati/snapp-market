"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "./ProductCard";

const Products = ({ items }: { items: Array<ProductProps> }) => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {items.map((item) => (
          <SwiperSlide  key={item.id} >
            <ProductCard key={item.id} data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
