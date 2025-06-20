import mongoose, { Types } from "mongoose"

const cartSchema = new mongoose.Schema({
    productId : { type : Types.ObjectId , required :true},
    quantity : {type : Number , required : true}
},
{timestamps : true}
)

const Cart =  mongoose.model('cart',cartSchema)
export default Cart