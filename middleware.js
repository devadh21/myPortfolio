export { default } from "next-auth/middleware"

export const config = { matcher: ["/portfolios","/servicess"] } 

// import { withAuth } from "next-auth/middleware"




// export default withAuth({
//   // Matches the pages config in `[...nextauth]`
//   pages: {
//     signIn: '/login',
    
//   }
// })
// export const config = { matcher: ["/portfolio","/services"] } 