import Cart from "../../models/Cart/cartModel.js"

export const addToCart = async(req,res)=>{
    const {body} = req
    const newItem = await Cart.create(body)

    if(newItem){
        return res.status(200).json({message : "Product Added to Cart Successfully"})
    }
}


export const fetchCart = async(req,res)=>{

    const totalItem = await Cart.countDocuments()
   
    if(totalItem){
        return res.status(200).json({ totalItem });
    }
}

