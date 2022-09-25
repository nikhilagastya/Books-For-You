const { add } = require("nodemon/lib/rules");
const Books = require("../models/Books");
const Book=require("../models/Books")

const getallbooks=async(req,res,next)=>{
    let books;
    try{
        books= await Book.find()
    }
    catch(err){
        console.log(err);
    }
    if(books){
        return res.status(200).json({books});
    }
    res.status(404).json({message:"The product doesnt exist"});
}
const getbookbyid=async(req,res,next)=>{
    let book;
    const id=req.params.id;
    try{
        book=await Books.findById(id)
    }
    catch(err){
        console.log(err)
    }
    if(book){
        return res.status(200).json({book});
    }
    res.status(404).json({message:"The product doesnt exist"});
}
const addbook=async (req,res,next)=>{
    let book
    const { name,author,description,price,available,image }=req.body
    try{
        book =new Book({
            name,
            author,
            description,
            price,
            available,image

        });
         await book.save();
    }
    catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(500).json({message:"product not added"})
    }
    else{
        return res.status(201).json({book});
    }
}
const updatebook = async (req, res, next) => {
    const id = req.params.id;
    const { name, author, description, price, available, image } = req.body;
    let book;
    try {
      book = await Book.findByIdAndUpdate(id, {
        name,
        author,
        description,
        price,
        available,
        image,
      });
      book = await book.save();
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ book });
  };
const deletebook = async(req,res,next)=>{
    let book
    const id=req.params.id;
    try{
        book=await Books.findByIdAndDelete(id);
    }
    catch (err) {
        console.log(err);
      }
      if (!book) {
        return res.status(404).json({ message: "Unable To delete By this ID" });
      }
      return res.status(200).json({ message:"The book is deleted"});
    
}
exports.getallbooks=getallbooks;
exports.addbook=addbook;
exports.getbookbyid=getbookbyid;
exports.updatebook =updatebook;
exports.deletebook=deletebook;