import mongoose from "mongoose";

export const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URL || "mongodb+srv://bhalitech512:123@cluster0.j7fr4.mongodb.net/cv").then(()=>console.log("Database connected"))
}