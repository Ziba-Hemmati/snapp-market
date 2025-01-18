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
    <div className="bg-red-300 rounded-lg p-4 h-[334px]">
      <Image
        src={`${url}`}
        alt={name}
        width={164}
        height={164}
        className="m-auto"
      />
      <div>
        {installment ? <div>{installment_Purchase}</div> : null}
        {pack ? <div>{pack}</div> : null}
        <div>{name}</div>
        <div>
          {weight} {unit}
        </div>
        {discount ? (
          <>
            <div>{discount}% </div>
            <div> {original_price} </div>
          </>
        ) : null}
        <div> {final_price} </div>
        <button>{add}</button>
      </div>
    </div>
  );
};

export default ProductCard;
