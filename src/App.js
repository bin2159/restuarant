import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart  from "./components/Cart/Cart";
import { useState } from "react";
import CartContextProvider from "./context/CartContext";
function App() {
  const [showCart,setShowCart]=useState(false)
  const showCartHandler=()=>{
    setShowCart(prev=>!prev)
  }
  return (
    <CartContextProvider>
      <Header showCartHandler={showCartHandler}/>
      {showCart&&<Cart showCartHandler={showCartHandler}/>}
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
