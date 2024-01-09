import { Category } from "../../../models/Category"
import mongoose from "mongoose"

export async function POST(req) {
    mongoose.connect(process.env.MONGODB_URL)
    const {name}= await req.json()
   const category = await Category.create({name})
    return Response.json(category)
}

export async function GET() {
    mongoose.connect(process.env.MONGODB_URL)
    const categories = await Category.find()
    return Response.json(categories)
}

export async function PUT(req) {
    
    mongoose.connect(process.env.MONGODB_URL)
    const {name,_id} = await req.json()
    await Category.updateOne({_id},{name})
    return Response.json(true)
    
}