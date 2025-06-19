import Axios from "../../config/Axios"
import type { ProductQuery } from "../../types.common"

export const getAllProducts = async(params : ProductQuery)=>{
    try {
        const response = await Axios.get('api/product',{params})
        return response.data
    } catch (error: any) {
        const err = new Error(error?.response?.data?.message || 'Error fetching Product list');
        console.error('Error fetching Product list:', err);
    }
}


export const getSingleProductData = async(id : string)=>{
    try {
        const response = await Axios.get(`api/product/${id}`)
        return response.data
    } catch (error: any) {
        const err = new Error(error?.response?.data?.message || 'Error fetching Product Data');
        console.error('Error fetching Product Data:', err);
    }
}

