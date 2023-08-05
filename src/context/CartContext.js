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
            const duplicateItemIndex=prev.findIndex(prevItem=>prevItem.id===newItem.id)
            if(duplicateItemIndex!==-1){
                const updatedItem = {
                    ...prev[duplicateItemIndex],
                    quantity: prev[duplicateItemIndex].quantity + newItem.quantity
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
    const removeItemHandler=()=>{

    }
    const cartContext={
        items:item,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }

    return(<CartContext.Provider value={{cartContext}}>{children}</CartContext.Provider>)
}

export default CartContextProvider