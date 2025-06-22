import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Greatestack:9368149600@cluster0.uspn9dt.mongodb.net/food-del').then(()=>console.log("DB.Connected"));
}   