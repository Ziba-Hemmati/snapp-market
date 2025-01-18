import Image from "next/image";
import { APP_CONSTANTS } from "../app-constants";

const Header = () => {
  const {
    location,
    user,
    basket,
    buy,
    hyper_star,
    change_store,
    time,
    categories,
    search,
  } = {
    ...APP_CONSTANTS.HEADER_CONSTANTS,
  };
  return (
    <div className="bg-hero-background w-full h-fit text-white text-sm pt-2 pb-5 px-36">
      <div className="flex justify-between items-center">
        <Image src="/logo.svg" alt="SnappMarket Logo" width={76} height={76} />
        <div className="flex items-center">
          <Image
            src="/location.svg"
            alt="Location"
            width={10}
            height={10}
            className="ml-2"
          />
          <span className="text-xs">{location}</span>
        </div>
        <div className="flex items-center">
          <Image
            src="/user.svg"
            alt="User"
            width={18}
            height={18}
            className="ml-2"
          />
          <span>{user}</span>
        </div>
        <button className="flex items-center bg-white rounded-md h-9 px-[15px]">
          <Image src="/basket.svg" alt="Basket" width={20} height={20} />
          <span className="text-blue-500 text-[.9rem] mx-[10px]">{basket}</span>
          <div className="text-blue-500 bg-blue-50 w-6 h-6 flex items-center justify-center rounded-full">
            .
          </div>
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/images/hyper-star.jpg"
            alt="HyperStar"
            width={54}
            height={54}
            className="rounded-full ml-2"
          />
          <span >{buy}</span>
          <span className="font-bold mr-2">
            {hyper_star}
          </span>
        </div>
        <button className="bg-white rounded-xl text-[10px] text-blue-500 flex items-center justify-center p-1  mr-4 w-[88px] h-[23px]">
          <span className="mt-[2px]"> {change_store}</span>
          <Image
            src="/down-arrow.svg"
            alt="DownArrow"
            width={8}
            height={8}
            className="mr-2 mt-[2px]"
          />
        </button>
        <div className="flex items-center">
          <Image
            src="/time.svg"
            alt="Time"
            width={18}
            height={18}
            className="ml-2"
          />
          <span className="text-xs">{time}</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="bg-white rounded-md flex items-center justify-center h-10 w-[125px]">
          <Image
            src="/categories.svg"
            alt="Categories"
            width={15}
            height={15}
          />
          <span className="text-[13px] mr-2 text-black">{categories}</span>
        </button>
        <div className="relative">
          <Image
            src="/search.svg"
            alt="Search"
            width={13}
            height={13}
            className="absolute top-[13px] right-4 row-span-4"
          />
          <input
            type="text"
            placeholder={search}
            className="rounded-3xl w-[348px] h-10 pr-10 pl-2 text-gray-150"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
