import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import bookRoutes from "./routes/bookRoutes.router.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/books", bookRoutes);

// Connect to MongoDB
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
});

app.get("/", async (req, res) => {
  res.send("Hello, World!");
});

export default app;
