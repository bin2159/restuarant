import { useContext } from "react";
import Modal from "../UI/Modal";
import Styles from "./Cart.module.css";
import { CartContext } from "../../context/CartContext";

const Cart = ({ showCartHandler }) => {
  const cartCtx = useContext(CartContext);
  const { cartContext } = cartCtx;
  const cartItems = (
    <ul className={Styles["cart-items"]}>
      {cartContext.items.map(({ item, id, price, quantity }) => (
        <li key={id} className={Styles["cart-item"]}>
          <div>{item}</div>
          <div>x{quantity}</div>
          <div>${(quantity*price).toFixed(2)}</div>
        </li>
      ))}
    </ul>
  );
  const cartHandler = () => {
    showCartHandler();
  };

  return (
    <Modal showCartHandler={showCartHandler}>
      {cartItems}
      <div className={Styles.total}>
        <span>Total Amount</span>
        <span>$35.62</span>
      </div>
      <div className={Styles.actions}>
        <button className={Styles["button--alt"]} onClick={cartHandler}>
          Close
        </button>
        <button className={Styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
