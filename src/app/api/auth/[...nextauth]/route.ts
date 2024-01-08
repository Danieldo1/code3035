import mongoose from "mongoose";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {User} from "@/models/User";

const handler = NextAuth({
  secret: process.env.SECRET,
  providers:[
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: { label: "Email", type: "email", placeholder: "johndoe@email.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
          // const { username, password } = credentials
          const email = credentials?.username
          const password = credentials?.password
        mongoose.connect(process.env.MONGODB_URL)
        const user= await User.findOne({email})
          if(user && user.password === password) {
            console.log(user)
            return user
          } else {
            return null
          }

      }
    })
  ],
})

export { handler as GET, handler as POST }