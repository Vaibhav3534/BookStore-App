import express from "express"
import cors from "cors"
import connection from "./Config/Db.js"
import { Router } from "express"
import bookRouter from "./Routes/bookRoutes.js"
import dotenv from "dotenv"

dotenv.config()
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

const port = 8080
app.listen(8080, async()=>{
    try {
        await connection
        console.log("Connected to Database")
    } catch (error) {
        console.log(error)
    }
})

app.get("/api", (req, res)=>{
    console.log("inside api")
    res.send("yess")
})

app.use("/api/books", bookRouter)
// app.use("/api/books", (req, res)=>{
//     res.send("hello")
// })

