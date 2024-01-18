import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems } = useCartContext();
  return (
    <div>
      {cartItems.map((cartItem) => {
        return (
          <div key={cartItem?.id}>
            <h1>{cartItem?.title}</h1>
            <h2>{cartItem.quantity}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
