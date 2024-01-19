import { useFilterContext } from "../context/FilterContext";
import Product from "./Product";

const ProductsDisplay = () => {
  const { filteredProducts, productsLoading } = useFilterContext();
  if (productsLoading) {
    return (
      <div className="flex-1 px-5 md:px-10">
        <h1 className="font-bold text-xl">Loading...</h1>
      </div>
    );
  }
  if (filteredProducts.length === 0) {
    return (
      <div className="flex-1 px-5 md:px-10 flex justify-center items-center">
        <h1 className="font-semibold text-xl">
          No Product was found based on your search result
        </h1>
      </div>
    );
  }
  return (
    <div className="flex-1 px-5 md:px-10">
      {filteredProducts?.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};
export default ProductsDisplay;
