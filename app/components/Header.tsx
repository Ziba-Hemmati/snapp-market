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
    <div className="bg-hero-background w-full text-white p-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center pt-[2px] px-2 pb-[10px] border-b border-zinc-700 md:px-4 xl:px-0">
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="SnappMarket Logo"
              width={49}
              height={24}
              className="p-2 md:w-[76px] md:h-[57px] md:p-0"
            />
            <div className="flex items-center p-2">
              <Image
                src="/location.svg"
                alt="Location"
                width={10}
                height={10}
                className="ml-2 md:mr-4"
              />
              <span className="text-xs truncate w-[91px] md:w-full">
                {location}
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <Image
                src="/user.svg"
                alt="User"
                width={18}
                height={18}
                className="ml-[10px] md:ml-0"
              />
              <span className="hidden lg:inline-block mr-[10px] ml-5 text-[15px]">
                {user}
              </span>
              <span className="hidden md:inline-block lg:hidden">...</span>
            </div>
            <button className="hidden md:flex items-center bg-white rounded-md py-[6px] px-[15px] mr-1">
              <Image src="/basket.svg" alt="Basket" width={20} height={20} />
              <span className="text-blue-500 text-[13px] mx-[10px]">
                {basket}
              </span>
              <div className="text-blue-500 bg-blue-50 w-[23px] h-[23px] flex items-center justify-center rounded-full text-sm">
                ۰
              </div>
            </button>
          </div>
        </div>
        <div className="px-2 py-4 border-b border-zinc-700 md:flex justify-between md:px-4 xl:px-0">
          <div className="flex items-center">
            <div className="flex items-center">
              <Image
                src="/images/hyper-star.jpg"
                alt="HyperStar"
                width={32}
                height={32}
                className="rounded-full ml-2 md:w-[45px] md:h-[45px]"
              />
              <span className="hidden md:inline-block text-sm ml-2">{buy}</span>
              <span className="font-bold text-sm">{hyper_star}</span>
            </div>
            <button className="bg-white rounded-xl text-[8px] md:text-[10px] text-blue-500 flex items-center pt-1 pr-2 pb-[3px] pl-[10px] mr-6">
              <span className="mt-[2px] md:mt-[1px] md:ml-[2px]">
                {" "}
                {change_store}{" "}
              </span>
              <Image
                src="/down-arrow.svg"
                alt="DownArrow"
                width={8}
                height={8}
                className="mr-[6px]"
              />
            </button>
          </div>
          <div className="mt-3">
            <Image
              src="/time.svg"
              alt="Time"
              width={18}
              height={18}
              className="hidden ml-2 md:inline-block"
            />
            <span className="text-xs">{time}</span>
          </div>
        </div>
        <div className="flex items-center mt-8 mb-2 md:px-4 xl:px-0">
          <button className="hidden bg-white rounded-md md:flex items-center justify-center h-10 w-[125px]">
            <Image
              src="/categories.svg"
              alt="Categories"
              width={15}
              height={15}
            />
            <span className="text-[13px] mr-2 text-black">{categories}</span>
          </button>
          <div className="relative w-full px-2 md:w-0">
            <Image
              src="/search.svg"
              alt="Search"
              width={13}
              height={13}
              className="absolute top-[11px] right-[23px] row-span-4"
            />
            <input
              type="text"
              placeholder={search}
              className="rounded-3xl w-full text-gray-900 pr-10 pl-[10px] py-2 placeholder:text-gray-900 text-[13px] md:w-[348px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
