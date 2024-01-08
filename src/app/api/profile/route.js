import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { User } from '@/models/User'


export async function PUT(req) {
    mongoose.connect(process.env.MONGODB_URL)
    const session = await getServerSession(authOptions)
    const data= await req.json()
    const email = session?.user?.email
    console.log({session,data,email})

    if('name' in data) {
          await  User.updateOne({email}, {name:data.name})
       
    }

  
    return Response.json(true)
}