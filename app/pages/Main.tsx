import Header from "../components/Header";
import Products from "../components/Products";
import products from "../getData";

const Main = () => {
  return (
    <div className="w-full max-w-screen-2xl">
      <Header />
      <Products items={products} />
    </div>
  );
};

export default Main;
