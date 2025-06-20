import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { getCartCount } from "../../actions/cart/CartActions";
import { CartContext } from "../../store/cartContext";


export default function HomeLayout({children}: { children: React.ReactNode }){
  const [cartCount , setCartCount] = useState<number>(0)
  
  useEffect(()=>{
    fetchCartCount()
  },[])

  const fetchCartCount = ()=>{
    getCartCount().then((res : any)=>{
      setCartCount(res?.totalItem)
    })
  }
    return (
        <>
          <div className='flex flex-col   h-screen bg-gray-100'>
            <Navbar cartCount={cartCount}/>
            <h1 className="my-3 text-xl w-full bg-white   text-gray-400 font-medium text-start    px-4 py-3" >Products</h1>
      <div className=" w-full bg-white h-screen rounded-lg shadow-md flex flex-col">
     
      <CartContext.Provider value={{ fetchCartCount }}>
  {children}
</CartContext.Provider>
      </div>
  
    </div>
      
        </>
    )
}