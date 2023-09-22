import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    contact:{
        type:String
    },
    password:{
        type:String
    }
})

export const User = mongoose.model("user",UserSchema);