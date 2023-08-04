
import Summary from './Summary'
import Styles from './Meals.module.css'
import MealItems from './MealItems'
const Meals = () => {
  return (
    <div className={Styles.meals}>
    <Summary/>
    <MealItems/>
    </div>
    
  )
}

export default Meals