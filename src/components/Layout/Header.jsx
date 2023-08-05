import Styles from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import CartIcon from '../Cart/CartIcon'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
const Header = ({showCartHandler}) => {
  const cartHandler=()=>{
    showCartHandler()
  }
  const cartCtx=useContext(CartContext)
  const totalCartItem=cartCtx.cartContext.items.reduce((curNumber,item)=>{ return curNumber+Number(item.quantity)},0)
  return (
    <>
    <header className={Styles.header}>
      <h2>ReactMeals</h2>
      <button onClick={cartHandler}><CartIcon/> Your cart <span>{totalCartItem}</span></button>
    </header>
    <div className={Styles["main-image"]}>
      <img src={mealsImage} alt="A table full of food" />
    </div>
    </>
    )
}

export default Header