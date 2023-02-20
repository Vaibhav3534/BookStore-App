import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    language:{
        type: String,
        required :true
    },
    link:{
        type:String,
    },
    country:{
        type:String,
        // required:true,
    }

})

const bookModel = mongoose.model("BookModel", BookSchema)

export default bookModel