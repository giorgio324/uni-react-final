import { useNavigate } from "react-router-dom";
const Product = ({ product }) => {
  const { id, title, description, imgUrl, price, category } = product;

  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/product/${id}`);
  };
  const handleAddToCart = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="group flex border mb-4" onClick={handleDetails}>
      <div className="w-full flex justify-center items-center h-80 cursor-pointer overflow-hidden p-2 border-r">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-60 object-contain group-hover:scale-105 duration-500"
        />
      </div>
      <div className="w-full px-2 py-4 flex flex-col justify-between gap-4 items-start flex-grow cursor-pointer">
        <div className="w-full flex flex-col gap-y-1 flex-1">
          <h2 className="font-bold text-xl">{title}</h2>
          <p className="font-bold">Price: ${price}</p>
          <p className="text-xs text-gray-500">
            Category: {category || "Other"}
          </p>
          <p>{description}</p>
        </div>

        <div className="flex w-full">
          <button
            className="text-gray-500 hover:text-gray-900 hover:bg-slate-200 transform transition-all py-3 duration-300 text-xs h-full w-full border"
            onClick={(e) => handleAddToCart(e)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product;
