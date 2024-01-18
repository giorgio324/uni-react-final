import { useNavigate } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import { useCartContext } from "../context/CartContext";
const Product = ({ product }) => {
  const { cartItems, setCartItems, handleAddToCart } = useCartContext();
  const navigate = useNavigate();
  return (
    <div
      className="group flex border mb-4"
      onClick={() => navigate(`/product/${product?.id}`)}
    >
      <div className="w-full flex justify-center items-center h-80 cursor-pointer overflow-hidden p-2 border-r">
        <img
          src={product?.imgUrl}
          alt={product?.title}
          className="w-full h-60 object-contain group-hover:scale-105 duration-500"
        />
      </div>
      <div className="w-full px-2 py-4 flex flex-col justify-between gap-4 items-start flex-grow cursor-pointer">
        <div className="w-full flex flex-col gap-y-1 flex-1">
          <h2 className="font-bold text-xl">{product?.title}</h2>
          <p className="font-bold">Price: ${product?.price}</p>
          <p className="text-xs text-gray-500">
            Category: {product?.category || "Other"}
          </p>
          <p>{product?.description}</p>
        </div>

        <div className="flex w-full">
          <AddToCartButton
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(product);
            }}
          >
            Add To Cart
          </AddToCartButton>
        </div>
      </div>
    </div>
  );
};
export default Product;
