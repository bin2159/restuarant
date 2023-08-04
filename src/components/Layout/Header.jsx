import Styles from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import CartIcon from '../Cart/CartIcon'
const header = () => {
  return (
    <>
    <header className={Styles.header}>
      <h2>ReactMeals</h2>
      <button><CartIcon/> Your cart <span>0</span></button>
    </header>
    <div className={Styles["main-image"]}>
      <img src={mealsImage} alt="A table full of food" />
    </div>
    </>
    )
}

export default header