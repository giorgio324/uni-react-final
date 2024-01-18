import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";
import { useCartContext } from "../context/CartContext";

const Product = () => {
  const { id } = useParams();
  const { handleAddToCart } = useCartContext();
  const [product, setProduct] = useState();
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    const getSingleProduct = async (id) => {
      const response = await fetch(`http://localhost:3000/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    getSingleProduct(id);
  }, []);
  return (
    <div className="max-w-screen-xl min-h-screen mx-auto px-10 flex flex-col justify-center gap-10">
      <div className="border flex items-center justify-center">
        <img
          src={product?.imgUrl}
          alt={product?.title}
          className="p-4 h-[250px] w-[250px] md:h-[350px] md:w-[350px] object-contain"
        />
        <div className="w-full px-8 py-4 flex gap-4 items-end">
          <div className="w-full flex flex-col gap-y-1 flex-1">
            <h2 className="font-bold text-xl">{product?.title}</h2>
            <p className="font-bold">Price: ${product?.price}</p>
            <p className="text-xs text-gray-500">
              Category: {product?.category || "Other"}
            </p>
            <p>{product?.description}</p>
          </div>

          <div className="flex flex-col w-[180px] gap-4 px-4">
            <div className="flex justify-between items-center">
              <button
                className="p-2 px-4 border"
                onClick={() => setAmount(amount + 1)}
              >
                +
              </button>
              <p>{amount}</p>
              <button
                className="p-2 px-4 border"
                onClick={() => {
                  if (amount > 1) setAmount(amount - 1);
                }}
              >
                -
              </button>
            </div>
            <AddToCartButton onClick={() => handleAddToCart(product, amount)}>
              Add To Cart
            </AddToCartButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
