import bodyParser from "body-parser";
import express from "express";
import path from "path"
import dbConfig from "./db/dbConfig.js";
import UserRoute from "./routes/user.route.js";
import ProductRoute from "./routes/product.route.js";
import { fileURLToPath } from "url";

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
const publicPath = path.join((path.dirname(fileURLToPath(import.meta.url))),"public")
app.use(express.static(publicPath));

app.use("/",UserRoute);
app.use("/product",ProductRoute);


app.listen(3000,()=>{
    console.log("server started on 3000");
})