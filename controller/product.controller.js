import { Product } from "../model/product.model.js";

export const addProduct = async (req,res,next)=>{
    try{
        await Product.create(req.body);
        return res.status(200).json({message:"product save successful",status:true})
    }
    catch(err){
        console.log(err);
        return res.status(500).json({error:"Internal Server Error",status:false});
    } 
}

export const viewProduct = async (req,res,next)=>{
    try{
        let product = await Product.find();
        return product ? res.status(200).json({product:product,status:true}):res.status(401).json({error:"product not found",status:false})
    }
    catch(err){
        console.log(err);
        return res.status(500).json({error:"Internal server error",status:false});
    }
}

export const updateProduct = async (req,res,next)=>{
    try{
        const product = await Product.findById({_id:req.params.id});
        if(product){
            product.name = req.body.name || product.name;
            product.price = req.body.price || product.price;
            product.quantity = req.body.quantity || product.quantity;
            product.color = req.body.color || product.color;
            product.description = req.body.description || product.description
            const updateProduct = await product.save();
            return res.status(200).json({product:updateProduct,status:true});
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).json({error:"Internal server error",status:false});
    }

}

export const deleteProduct = async (req,res,next)=>{
    try{
        let product = await Product.findByIdAndDelete({_id:req.params.id})
        return product ? res.status(200).json({message:"product delete successful",status:true}):res.status(401).json({error:"product not fount",status:false});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({error:"Internal server error",status:false});
    }
}
