// /** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // experimental: {
    // serverActions: true,
  //   appDir: true,
  //   serverComponentsExternalPackages:["mongoose"],
  // },
    images: {
      domains: ["placehold.co","pixabay.com","lh3.googleusercontent.com"],
      // unoptimized:true,
      },
      
    // env:{
    //   NEXTAUTH_URL:"http://localhost:3000",
    //   NEXTAUTH_SECRET: "codingwithhicham",
    //   // DATABASE_MONGO_URL : "mongodb+srv://someone07:1Dx4Hk3AKu9HM6fM@cluster0.ucbluhq.mongodb.net/dbporfolio" ,
    //   DATABASE_MONGO_URL : "mongodb://127.0.0.1:27017/dbportfolio" ,
    //   TOKEN_SANITY : "skgPSIBw9KUesYkmnLcTxdSrG5xmY9V82i15PE6HGaSCNZDYzp79U7EgJ55U0Sk808bVeFpb29QJnpqH1hee54dfaa3Ahxljukn3Pa0Y8cLsKkwQZRMr64gIsfMlRVDfVrBCP8qT8hvxzKXjVxsxndJQMBIShrGP4kCSknd4JwtzvNIjR9If"
    // }, 

    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    // output:'export',
    // distDir: 'build',
}

module.exports = nextConfig
