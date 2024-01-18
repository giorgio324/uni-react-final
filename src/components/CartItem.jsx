import { BsTrash } from "react-icons/bs";
import { useCartContext } from "../context/CartContext";

const CartItem = ({ cartItem }) => {
  const totalItemPrice = cartItem?.price * cartItem?.quantity;
  const { cartItems, setCartItems } = useCartContext();
  const handleRemoveItem = (cartItemToRemove) => {
    const filteredItems = cartItems.filter(
      (item) => item.id !== cartItemToRemove.id
    );
    setCartItems(filteredItems);
  };
  const handleQuantityDecrease = (cartItemToFind) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === cartItemToFind.id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });

    setCartItems(updatedCartItems);
  };
  const handleQuantityIncrease = (cartItemToFind) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === cartItemToFind.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });

    setCartItems(updatedCartItems);
  };
  return (
    <div className="flex items-center justify-between border p-4">
      <button onClick={() => handleRemoveItem(cartItem)}>
        <BsTrash className="text-2xl" />
      </button>
      <img src={cartItem?.imgUrl} alt={cartItem?.title} className="h-32 w-32" />
      <h1 className="font-semibold text-lg">{cartItem?.title}</h1>
      <p>${cartItem?.price.toFixed(2)}</p>
      <div className="flex items-center gap-4">
        <button
          className="p-2 px-4 border"
          onClick={() => handleQuantityIncrease(cartItem)}
        >
          +
        </button>
        {cartItem?.quantity}
        <button
          className="p-2 px-4 border"
          onClick={() => handleQuantityDecrease(cartItem)}
        >
          -
        </button>
      </div>
      <p>item total: ${totalItemPrice.toFixed(2)}</p>
    </div>
  );
};
export default CartItem;
