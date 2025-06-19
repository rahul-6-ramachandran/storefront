import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name : {type: String , required:true , unique : true},
    price : {type : Number, required : true},
    description : { type : String, required : false},
    images : {type : [String], required : true}
},
{timestamps : true}
)

const Product =  mongoose.model('product',productSchema)
export default Product