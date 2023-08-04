import Modal from '../UI/Modal';
import Styles from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul className={Styles['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={Styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={Styles.actions}>
        <button className={Styles['button--alt']}>Close</button>
        <button className={Styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;