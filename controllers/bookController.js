import Book from "../models/Book.model.js";

//GET all books
export const getAllBooks = async (req, res) => {
    try{
        const books = await Book.find();
        res.status(200).json(books);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
};

export const getBookbyId = async(req,res)=>{
    const id=req.params.id;
    try{
        const book = await Book.findById(id);
        if(!book) return res.status(404).json({ message: "Book not found" });
        res.status(200).json(book);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
};

//POST a new book
export const createBook = async(req,res)=>{
    try{
    const book = await Book.create(req.body)
    res.status(200).json(book);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

export const updateBook = async(req,res)=>{
    try{
        const {id}= req.params
        const book = 
    }
}