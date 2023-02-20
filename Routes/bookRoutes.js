import express from "express"
import { getAllBooks,  getById, addBook} from "../Controllers/bookController.js"

const bookRouter = express.Router()

bookRouter.get("/a", (req, res)=>{
    res.send("yes")
})
bookRouter.get("/", getAllBooks);
bookRouter.get("/:id", getById );
bookRouter.post("/add", addBook);

export default bookRouter