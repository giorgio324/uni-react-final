import { useEffect, useState } from "react";
import Product from "./Product";

const ProductsDisplay = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
    };
    getAllProducts();
  }, []);
  return (
    <div className="flex-1 px-5 md:px-10">
      {products?.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};
export default ProductsDisplay;
