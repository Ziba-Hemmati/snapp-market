import Image from "next/image";
import { APP_CONSTANTS } from "../app-constants";

const ProductCard = ({ data }: { data: ProductProps }) => {
  const {
    url,
    name,
    pack,
    installment,
    discount,
    final_price,
    original_price,
    weight,
    unit,
  } = { ...data };
  const { installment_Purchase, add } = { ...APP_CONSTANTS.PRODUCTS_CONSTANTS };
  return (
    <div className="bg-white rounded-lg p-4 h-[334px] w-[227px] text-black">
      <Image
        src={`${url}`}
        alt={name}
        width={163}
        height={163}
        className="m-auto"
      />
      <div>
        {installment ? (
          <div className="text-red-300 text-xs border border-zinc-200 rounded-md bg-white absolute top-40 py-[3px] px-1">
            {installment_Purchase}
          </div>
        ) : null}
        {pack ? (
          <div className="text-xs text-blue-500 flex items-center border border-zinc-200 rounded-md bg-white absolute top-40 py-[3px] px-1">
            <Image
              src="/pack.svg"
              alt="Pack"
              width={16}
              height={16}
              className="ml-1"
            />
            <span>{pack}</span>
          </div>
        ) : null}
        <div className="h-[68px] my-2">
          <h2 className="text-sm h-[42px]">{name}</h2>
          <div className="text-xs text-gray-600 mt-1">
            {weight} {unit}
          </div>
        </div>
        {discount ? (
          <div className="flex items-center">
            <div className="bg-red-600 text-white px-1 rounded-sm w-fit">
              %{discount}
            </div>
            <div className="line-through text-xs text-zinc-400 mr-1">
              {original_price}
            </div>
          </div>
        ) : null}
        <div className="flex justify-between items-end">
          <div className="text-black-600">
            {final_price}
            <span className="text-xs text-zinc-400 mr-1">تومان</span>
          </div>
          <button className="text-xs text-blue-600 w-[97.5px] h-[34px] border border-zinc-200 rounded-2xl">
            {add}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
