const mongoose=require("mongoose")

const Schema=mongoose.Schema

const bookschema= new Schema({
    name :{
        type: String,
        required:true
    },
    author:{
        type: String,
        required:true

    },
    description :{
        type: String,
        required:true

    },
    price :{
        type: Number,
        required:true
    },
    available :{
        type: Boolean

    },image:{
        type: String,
        required:true
    }
});

module.exports=mongoose.model("book",bookschema);