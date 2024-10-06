import { NextResponse ,NextRequest } from 'next/server'
import User from "../../models/user";
import dbConnect from "../../config/dbConnect";

export  async function POST(req:NextRequest) { 
     try {
          await dbConnect();  
          interface IDataReq{
               I_user_name:string, 
               I_email:string, 
               I_password:string }
          const { I_user_name, I_email, I_password }:IDataReq = await req.json();

          interface IUser{
               user_name:string, 
               email:string, 
          }
          const {user_name,email}:IUser = await User.create({ user_name:I_user_name, email:I_email, password:I_password });

          const data = {
               user_name:user_name,
               email:email,              
          }
          
          return NextResponse.json({"message":"user created successfully","status":201,"data":data})
     } catch (error) {
          console.log(error)          
     }

        


     

     

}
