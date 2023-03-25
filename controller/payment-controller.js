import { instance } from "../index.js";
import crypto   from "crypto";

export const checkout=async(req,res)=>{

    try{
        
var options = {
    amount: 10000,  // amount in the smallest currency unit
    currency: "INR",

  };
 const order=await instance.orders.create(options);
    

    return res.status(200).json({sucess:true,order});
   }catch(error){
    console.log(error);
}
}

export const paymentVerification=(req,res)=>{
    
        const {razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body;
        const body=razorpay_order_id + "|" + razorpay_payment_id;

        var expectedSignature = crypto.createHmac('sha256', process.env.SECRET_KEY)
                                        .update(body.toString())
                                        .digest('hex');
        
    const isAuthenticate=expectedSignature===razorpay_signature;
    if(isAuthenticate){

        res.redirect(
            'https://localhost:3000/'
        )
    }else {
        res.status(400).json({success:false,})
    }
};

    

