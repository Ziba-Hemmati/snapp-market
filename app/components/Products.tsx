import products from "../getData";
import ProductsContainer from "./ProductsContainer";

const Products = () => {
  return (
    <ProductsContainer
      tag="تخفیف تا 50%"
      title="سه‌شنبه‌های پرتخفیف"
      btn="مشاهده همه محصولات"
      header=""
      products={products}
    />
  );
};

export default Products;
