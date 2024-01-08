import mongoose from "mongoose";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {User} from "@/models/User";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/libs/MongoConnect";

export const authOptions = {
  secret: process.env.SECRET,
   adapter: MongoDBAdapter(clientPromise),
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
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60 // 30 days
  }
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }