import express  from "express";
import connection from "./database/db.js";
import dotenv from 'dotenv'
import DefaultData from "./default.js";
import router from "./routes/routes.js";
import cors from 'cors';
import bodyParser from "body-parser";
import Razorpay from "razorpay" ;

const app=express();



dotenv.config();


app.use(cors());
app.use(bodyParser.json({extended:true}));

app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);



const port=8000;
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
connection(USERNAME,PASSWORD);

export const instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.SECRET_KEY,
  });

app.listen(port,()=>console.log(`server running on ${port}`));
DefaultData();