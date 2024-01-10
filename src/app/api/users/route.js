import mongoose from 'mongoose'
import {User} from '@/models/User'

export async function GET(){
mongoose.connect(process.env.MONGODB_URL)
const user = await User.find()
return Response.json(user)
}

export async function POST(req){
    const body = await req.json()
    mongoose.connect(process.env.MONGODB_URL)
    const user = await User.create(body)
    return Response.json(user)

}

export async function PUT(req){
    const body = await req.json()
    mongoose.connect(process.env.MONGODB_URL)
    const user = await User.findByIdAndUpdate(body._id, body)
    return Response.json(user)
}