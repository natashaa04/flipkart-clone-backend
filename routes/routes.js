import  express from 'express';
import { userSignup,userLogin } from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/product-controller.js';
import { paymentVerification,checkout } from '../controller/payment-controller.js';
import dotenv from 'dotenv'

const router=express.Router();
dotenv.config();

router.post('/signup' , userSignup);
router.post('/login' , userLogin);
router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post("/checkout",checkout);
router.post("/paymentverification",paymentVerification);
router.get("/getkey",(req,res)=>res.status(200).json({key:process.env.KEY_ID}))


export default router;
