import Product from "../../models/Product/ProductModel.js"

export const getAllProducts = async(req,res)=>{
    const {page = 1, limit=0} = req.params

}


export const createProduct = async(req,res)=>{
        const {body} = req
        console.log(body)
        const newProduct = await Product.create(body)

        if(newProduct){
            return res.status(200).json({message : "Product Added Successfully"})
        }
}


export const getSingleProduct = async(req,res)=>{
    const {id} = res.params
    const product = await Product.find({_id : id})



    return res.status(500).json({message : "Product Added Successfully"})
}

