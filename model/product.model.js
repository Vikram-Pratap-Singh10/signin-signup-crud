import mongoose from "mongoose"

const ProductSchema = mongoose.Schema({
    title:{
        type:String
    },
    price:{
        type:Number
    },
    quantity:{
        type:Number
    },
    color:{
        type:String
    },
    description:{
        type:String
    }
})

export const Product = mongoose.model("product",ProductSchema);