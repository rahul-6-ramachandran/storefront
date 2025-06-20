import mongoose from "mongoose";
import Product from "../../models/Product/ProductModel.js"

export const getAllProducts = async(req,res)=>{
    const page = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 3
  const {sort} = req.query

  const skip = (page - 1) * limit;

  let sortOption = {};

  if (sort === 'price_asc') sortOption.price = 1;
  else if (sort === 'price_desc') sortOption.price = -1;
  else if (sort === 'name_asc') sortOption.name = 1;
  else if (sort === 'name_desc') sortOption.name = -1;

  const items = await Product.find().sort(sortOption).skip(skip).limit(limit); 
  const total = await Product.countDocuments();

  
  res.json({
    items,
    total,  
    page,
    limit,
  });

}


export const createProduct = async(req,res)=>{
        const {body} = req
        const newProduct = await Product.create(body)

        if(newProduct){
            return res.status(200).json({message : "Product Added Successfully"})
        }
}


export const getSingleProduct = async(req,res)=>{
    const {id} = req.params
    console.log(id)
    const product = await Product.findById({_id : id })


    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ productDetails: product });
}

