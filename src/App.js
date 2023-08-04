import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart  from "./components/Cart/Cart";
import { useState } from "react";
function App() {
  const [showCart,setShowCart]=useState(false)
  const showCartHandler=()=>{
    setShowCart(prev=>!prev)
  }
  return (
    <>
      <Header showCartHandler={showCartHandler}/>
      {showCart&&<Cart showCartHandler={showCartHandler}/>}
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
