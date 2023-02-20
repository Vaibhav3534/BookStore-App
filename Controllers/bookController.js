import bookModel from "../models/BookModel.js";
import express from "express"


const Book = bookModel

//Book Register api (Adding book to database)

export const addBook = async(req, res)=>{
    const {bookName, author, price, image, description, available} = req.body;
    console.log("entered addbook")
    try {
        const bookCheck = await Book.exists({bookName: bookName})

        if(bookCheck){
            return res.status(201).send({success: false, message: "Book already added to database"})
        }

        const book =new Book(req.body);
        await book.save()

        return res.status(201).send({success:true, message:"Book added successfully"})
    } catch (error) {
        console.log(error)
        return res.send(error.message)
    }
}

//Get all books api

export const getAllBooks = async (req, res)=>{
    try {
        const books = await Book.find();
        if(!books){
            return res.status(404).json({success: false, message:"No Books Found"})
        }

        return res.status(200).send({success:true, message:"Books fetched successfully", data: books})
        
    } catch (error) {
        return res.status(501).send({success: false, message:"Internal server error"})
    }
}

//API to getBook by id 

export const getById = async(req, res)=>{
    try {
        const id = req.params.id;
        const book = await Book.findById(id)
        if(!book){
            return res.status(404).send({success: true, message:"No book found"})
        }
        return res.status(201).send({success: true, message:"Book fetched", data:book})
    } catch (error) {
        res.status(501).send({success:false, message:"Internal server error"})
    }
}


// API to get 




