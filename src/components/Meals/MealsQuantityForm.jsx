import Styles from "./MealsQuantityForm.module.css"

const MealsQuantityForm = () => {
  return (
    <form className={Styles.form}>
        <label >Amount</label>
        <input type="number" defaultValue={1} min={1} max={5} step={1}/>
        <div>
            <button>+Add</button>
        </div>
        
    </form>
  )
}

export default MealsQuantityForm