import Styles from "./MealsQuantityForm.module.css"

const MealsQuantityForm = () => {
  return (
    <form className={Styles.form}>
        <label >Amount</label>
        <input type="number" />
        <div>
            <button>+Add</button>
        </div>
        
    </form>
  )
}

export default MealsQuantityForm