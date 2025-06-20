import Axios from "../../config/Axios"
import type { CreateCart } from "../../types.common"

export const addNewProductToCart = async(productData : CreateCart)=>{
  try {
    const response = await Axios.post('/api/cart', productData)
    return response;
  } catch (error: any) {
    const err = new Error(error?.response?.data?.message || 'Error adding to Cart list');
    console.error('Error adding to Cart list:', err);
  }
    
}

export const getCartCount = async()=>{
    try {
      const response = await Axios.get('/api/cart')
      return response.data;
    } catch (error: any) {
      const err = new Error(error?.response?.data?.message || 'Error Fetching to Cart list');
      console.error('Error Fetching to Cart list:', err);
    }
      
  }