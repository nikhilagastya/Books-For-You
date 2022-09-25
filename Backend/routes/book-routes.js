
const express=require("express")
const router=express.Router()

const Book=require("../models/Books")
const getbooks=require("../controllers/books-controller")


router.get("/",getbooks.getallbooks)
router.post("/",getbooks.addbook);
router.get("/:id", getbooks.getbookbyid);
router.put("/:id",getbooks.updatebook)
router.delete("/:id",getbooks.deletebook)
module.exports=router;