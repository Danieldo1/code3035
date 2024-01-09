import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { User } from '../../../models/User'
import { Admin } from '../../../models/Admins'


export async function PUT(req) {
    mongoose.connect(process.env.MONGODB_URL)
    const data= await req.json()
    const {name,image, ...rest} = data
    const session = await getServerSession(authOptions)
    const email = session?.user?.email
    
    
     await User.updateOne({email},{name,image})

     await User.findOneAndUpdate({email},rest,{upsert: true})
    return Response.json(true)
}

export async function GET() {
    mongoose.connect(process.env.MONGODB_URL)
    const session = await getServerSession(authOptions)
    
    const email = session?.user?.email
    if(!email) return Response.json({})
    const user = await User.findOne({email}).lean()
const admin = await Admin.findOne({email}).lean()
    return Response.json({...user,...admin})
}