import { mongoose } from "mongoose";

export const connection=async (username,password)=>{

   const url=`mongodb+srv://${username}:${password}@ecommerce-web.4pt0qgj.mongodb.net/?retryWrites=true&w=majority`; 
    try{
        await mongoose.connect(url,{ useUnifiedTopology:true,useNewUrlParser:true } );
        console.log('database connected succesfully');
    }catch(error){
        console.log('error is',error.message);
    }
} 
export default connection;