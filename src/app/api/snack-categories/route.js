import {SnackCategory} from '../../../models/Snack'
import mongoose from 'mongoose'

export async function POST(req) {
    mongoose.connect(process.env.MONGODB_URL)
    const {name,description,}= await req.json()
   const category = await SnackCategory.create({name,description,})
    return Response.json(category)
}

export async function GET() {
    mongoose.connect(process.env.MONGODB_URL)
    const categories = await SnackCategory.find().sort('order');
    return Response.json(categories)
}

export async function PUT(req) {
    
    mongoose.connect(process.env.MONGODB_URL)
    const {name,_id,description} = await req.json()
    await SnackCategory.updateOne({_id},{name,description})
    return Response.json(true)
    
}

export async function DELETE(req) {
    mongoose.connect(process.env.MONGODB_URL)
    const {_id} = await req.json()
    await SnackCategory.deleteOne({_id})
    return Response.json(true)
}
