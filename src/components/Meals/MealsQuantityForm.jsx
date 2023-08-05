import { useContext, useState} from "react"
import Styles from "./MealsQuantityForm.module.css"
import { CartContext } from "../../context/CartContext"

const MealsQuantityForm = ({item,amount,id,price}) => {
  const cartCtx=useContext(CartContext)
  const [quantity,setQuantity]=useState(1)
  const quantityHandler=(event)=>{
    setQuantity(event.target.value)
  }
  const cartUpdateHandler=(event)=>{
    event.preventDefault()
    cartCtx.cartContext.addItem({item,id,price,quantity}) 
  }

  // useEffect(()=>{
  //   console.log(cartCtx.cartContext.items)
  // },[cartCtx.cartContext.items])
  return (
    <form className={Styles.form}>
        <label >Amount</label>
        <input type="number" min={1} max={5} step={1} onChange={quantityHandler} value={quantity}/>
        <div>
            <button type="submit" onClick={cartUpdateHandler}>+Add</button>
        </div>
        
    </form>
  )
}

export default MealsQuantityForm