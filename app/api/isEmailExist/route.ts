import dbConnect from "../../config/dbConnect";
import User from "../../models/user";
import { NextResponse } from "next/server";


export async function POST(req){ 
    try {
        await dbConnect();
        const {email}:{email:string} = await req.json()
        const user =await User.findOne({email}).select("email")
        if(!user){
            // const res:{user:boolean} ={user:false}
            return NextResponse.json(false)
        } 
        // const data:{email:string} = {email: user?.email}
        return NextResponse.json(true)
    } catch (error) {
        console.log(error)        
    } 
 }