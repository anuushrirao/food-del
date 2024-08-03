import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://anushkavshrirao:ciOndryScOUrTQPe@cluster0.jseiib4.mongodb.net/FoodDelivery').then(()=>console.log("Db connected"));
}