import Book from "../models/Book.model.js";

//GET all books
export const getAllBooks = async (req, res) => {
  try {
    const { status, sort, page = 1, limit = 4, search } = req.query;
    const filter = {};
    if (status) {
      filter.status = status;
    }
    if (search) {
      filter.title = { $regex: search, $options: "i" }; // Case-insensitive search
    }

    const books = await Book.find(filter)
      .sort(sort ? { [sort]: 1 } : {})
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    const totalBooks = await Book.countDocuments(filter);
    const totalPages = Math.ceil(totalBooks / limit);

    res.status(200).json({
      books,
      totalBooks,
      totalPages,
      currentPage: parseInt(page),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBookbyId = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//POST a new book
export const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
