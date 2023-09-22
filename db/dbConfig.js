import mongoose from "mongoose";

mongoose.connect("mongodb+srv://adityajhala23:Aditya123@cluster0.qunzcul.mongodb.net/crud?retryWrites=true&w=majority")
.then(result=>{
    console.log("database connected....");
})
.catch(err=>{
    console.log(err);
})

export default mongoose.connection;