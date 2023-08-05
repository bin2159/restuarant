import { useContext } from "react";
import Modal from "../UI/Modal";
import Styles from "./Cart.module.css";
import { CartContext } from "../../context/CartContext";

const Cart = ({ showCartHandler }) => {
  const cartCtx = useContext(CartContext);
  const { cartContext } = cartCtx;
  const removeItemHandler=(event)=>{
    cartContext.removeItem(event.target.id)
  }
  const addItemHandler=(event)=>{
    const id=event.target.id
    const item={id}
    cartCtx.cartContext.addItem(item)
  }
  const cartItems = (
    <ul className={Styles["cart-items"]}>
      {cartContext.items.map(({ item, id, price, quantity }) => (
        <li key={id} className={Styles["cart-item"]}>
          <div className="item-details">
            <div className={Styles["item-name"]}>{item}</div>
            <div>
              <span className={Styles["item-price"]}>
                ${(quantity * price).toFixed(2)}
              </span>
              <span className={Styles["item-quantity"]}>x{quantity}</span>
            </div>
          </div>
          <div>
            <button id={id}className={Styles['button-edit']} onClick={removeItemHandler}>-</button>
            <button id={id} className={Styles['button-edit']} onClick={addItemHandler}>+</button>
          </div>
        </li>
      ))}
    </ul>
  );
  const cartHandler = () => {
    showCartHandler();
  };
  const totalAmount=cartCtx.cartContext.items.reduce((curNumber,item)=>{ return curNumber+Number(item.quantity*item.price)},0)

  return (
    <Modal showCartHandler={showCartHandler}>
      {cartItems}
      <div className={Styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
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
