import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://root:root@cluster0.0xp0e.mongodb.net/JihvaProject').then(()=>{console.log("DB Connected");
  })
}