import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connection = mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.l2xq2cy.mongodb.net/?retryWrites=true&w=majority`)

export default connection;