//bq9qH6DsHpgaVGwJ



//JH0QvuGo9uYJ2gux


const express=require("express");
const { default: mongoose } = require("mongoose");
const app=express()
const mongooose=require("mongoose");
const { addbook } = require("./controllers/books-controller");
const router=require("./routes/book-routes")
const cors=require("cors")

app.use(express.json())
app.use(cors());
app.use("/books",router);


mongoose.connect("mongodb+srv://Admin:bq9qH6DsHpgaVGwJ@cluster0.iuqtdm1.mongodb.net/book-store?retryWrites=true&w=majority"
).then(()=> console.log("Connected to db")).then(()=>{app.listen(5000)}).catch((err)=>console.log("err"))
