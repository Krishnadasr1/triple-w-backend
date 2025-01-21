import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from './routes/user.js';
import adminRoute from './routes/admin.js';
import cors from 'cors';

dotenv.config();
const app = express();


mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

mongoose.connection.on("error",(err)=>{
    console.log("err", err);
});

mongoose.connection.on("connected",(err,res)=>{
    console.log("connected to MongoDB");
    
});


app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'));


app.use("/api/v1/user",userRoute);
app.use("/api/v1/admin",adminRoute);


app.listen(process.env.PORT || 3000, ()=>{
    console.log(`listening on port ${process.env.PORT}`)
});