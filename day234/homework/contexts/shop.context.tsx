import { createContext , useContext , useEffect , useState } from "react";

const ShopContext = createContext()
export const useShopContext = () => useContext(ShopContext)

const ShopProvider = ({children}) =>{
  const [products , setProducts] = useState([])
  
  useEffect(() =>{
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products/category/electronics?limit=10")
      
      const data = await res.json()
      
      if(!res.ok) return console.log("error fetching products")
      
      setProducts(data)
    }
    fetchProducts()
  },[])
  
  return (
    <ShopContext.Provider value={{products}}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopProvider