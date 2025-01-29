type ProductProps = {
  id: number;
  url: string;
  installment: boolean;
  pack: string;
  name: string;
  weight: number | null;
  unit: string;
  discount: number;
  original_price: number;
  final_price: number;
};

type ProductsContainerProps = {
  tag: string;
  title: string;
  btn: string;
  header: string;
  products: Array<ProductProps>;
  pattern: boolean;
};

type BannerProps = {
  image: string;
};
