import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useCartContext } from "../context/CartContext";
const Cart = () => {
  const { cartItems, setCartItems } = useCartContext();
  const total = cartItems.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.price * currentItem.quantity,
    0
  );
  if (cartItems.length === 0) {
    return (
      <div className="max-w-screen-xl min-h-screen mx-auto px-5 md:px-10 py-10 font-bold text-3xl flex flex-col gap-10 justify-center items-center">
        <h1>Your Cart is Empty</h1>
        <Link to={"/"} className="px-4 py-2 border">
          Go Back To Shopping
        </Link>
      </div>
    );
  }
  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-10 py-10 ">
      <div className="flex justify-between mb-4">
        <p className="text-2xl font-bold">Cart</p>
        <button
          className="bg-red-400 hover:bg-red-700 transition-colors duration-150 px-4 py-2 text-white"
          onClick={() => setCartItems([])}
        >
          Clear Cart
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {cartItems.map((cartItem) => {
          return <CartItem cartItem={cartItem} key={cartItem.id} />;
        })}
      </div>
      <div className="mt-4 flex justify-between font-bold text-2xl">
        <p>Total Price: ${total.toFixed(2)}</p>
        <Link to={"/"} className="px-4 py-2 border">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};
export default Cart;
