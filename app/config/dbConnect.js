 import mongoose from "mongoose"

 export default async function dbConnect() {     
    try {        
        await mongoose.connect(process.env.DATABASE_MONGO_URL);
        console.log('MongoDB connected seccessfully');       
    } catch (error) {
        console.log(error)  
    }
 }
 