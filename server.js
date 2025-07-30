import express from "express";
import dotenv from "dotenv";
import connectdb from "./db/dbconnect.js";


const app = express();

dotenv.config();
connectdb();

//MIDDLEWARES
app.get(express.json());
app.get(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.status(200).send("server is running fine");
})
app.get('/api/home',(req,res)=>{
    res.status(200).send("home page rout checking");
})
let port=process.env.port ||5051;
app.listen(port,()=>{
    console.log('server running on http://localhost:$port');
    
    
});