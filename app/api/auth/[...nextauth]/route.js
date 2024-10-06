
import dbConnect from "../../../config/dbConnect";
import bcrypt from "bcryptjs"
import User from "../../../models/user";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
<<<<<<< HEAD
// import GoogleProvider from "next-auth/providers/google";
=======
import GoogleProvider from "next-auth/providers/google";
>>>>>>> f994e90d3660b73c2c0d09e810f6a0fb7fc73968

export const authOptions = {
  session:{
    strategy:"jwt",
  },
  providers: [
    CredentialsProvider({
        name:"credentials",
        // credentials:{},
        async authorize(credentials,req){
          const { email, password } = credentials;  
          try {
            await dbConnect();
            const user = await User.findOne({email}).select("password");
            // console.log(user)

            if(!user){
              return null
            }

            const passwordMatch =await bcrypt.compare(password,user.password);
            if(!passwordMatch){
              return null
            }  

            return user; 
          } catch (error) {
            console.log(error)            
          }               
        },
<<<<<<< HEAD
    }), 
    // google provider
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET
    // })
=======
    }),
        // google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
    
>>>>>>> f994e90d3660b73c2c0d09e810f6a0fb7fc73968
    
  ],
  // callbacks: {
  //   async signIn({ user}) {
  //       console.log(user.name)
  //       console.log(user.email)
  //       console.log(user.image)


  //   }
  // },
  secret:process.env.NEXTAUTH_SECRET,
  // if want to use your custom login page
  pages: {
    signIn: "/login",
  },
 }
const  handler = NextAuth(authOptions)

export { handler as GET, handler as POST }