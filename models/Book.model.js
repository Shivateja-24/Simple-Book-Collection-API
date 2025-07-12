import mongoose from mongoose;

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    author: {
        type: String,
        required: [true, "Author is required"]
    },
    genre: {
        type: String,
    },
    publishedYear: {
        type: Number,
    },
    status: {
        type: String,
        required: [true, "Status is required"],
        enum: ["unread", "reading", "read"], 
        required: true,
    },
},
    {
        timestamps: true
    }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;