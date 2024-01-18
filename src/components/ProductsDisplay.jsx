import Product from "./Product";
import useFetch from "../hooks/useFetch";

const ProductsDisplay = () => {
  const { data: products, isLoading } = useFetch("/products");
  if (isLoading) {
    return (
      <div className="flex-1 px-5 md:px-10">
        <h1 className="font-bold text-xl">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="flex-1 px-5 md:px-10">
      {products?.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};
export default ProductsDisplay;
