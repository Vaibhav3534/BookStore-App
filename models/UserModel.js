import mongoose from "mongoose";
import jwt from "jsonwebtoken"



const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true, minLength: 1 },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: Boolean, required: true, default: false },
    created_at: { type: Date, required: true, default: Date.now }
}, { timestamps: true })

const userModel = mongoose.model("Users", userSchema)
