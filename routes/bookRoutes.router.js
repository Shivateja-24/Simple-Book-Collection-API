import { Router } from "express";
import {
  getAllBooks,
  getBookbyId,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";

const router = Router();

router.get("/", getAllBooks);
router.get("/:id", getBookbyId);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
