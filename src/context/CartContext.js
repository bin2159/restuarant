import { createContext, useState } from "react"


export const CartContext = createContext({
    items:"",
        addItem:()=>{},
        removeItem:()=>{}
})

const CartContextProvider=({children})=>{
    const [item,setItem]=useState([])

    const addItemHandler=(newItem)=>{
        setItem(prev=>{
            console.log(newItem)
            const duplicateItemIndex=prev.findIndex(prevItem=>prevItem.id===newItem.id)
            if(duplicateItemIndex!==-1){
                const updatedItem = {
                    ...prev[duplicateItemIndex],
                    quantity: prev[duplicateItemIndex].quantity + (newItem.quantity||1)
                  };
                  const newArr = [...prev];
                  newArr[duplicateItemIndex] = updatedItem;
                  return newArr
            }
            else{
                return [...prev,newItem]
            }
        } )
    }
    const removeItemHandler=(id)=>{
        setItem(prev=>{
            const removeItemIndex=prev.findIndex(item=>item.id===id)
            const updatedItem={...prev[removeItemIndex],quantity:(prev[removeItemIndex].quantity-1<0?0:prev[removeItemIndex].quantity-1)}
            if(updatedItem.quantity===0){
                const newArr=prev.filter(item=>item.id!==id)
                return newArr
            }
            else{
                const newArr=[...prev]
                newArr[removeItemIndex]=updatedItem
                return newArr
            }
           
        })
    }
    const cartContext={
        items:item,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }

    return(<CartContext.Provider value={{cartContext}}>{children}</CartContext.Provider>)
}

export default CartContextProvider