import {OfferName} from '../../../../models/OfferName'
import mongoose from 'mongoose'

export async function POST(req) {
    console.log(req)
    mongoose.connect(process.env.MONGODB_URL)
    const {name,available}= await req.json()
   const category = await OfferName.create({name ,available})
    return Response.json(category)
}

export async function GET() {
    mongoose.connect(process.env.MONGODB_URL)
    const categories = await OfferName.find().sort('order');
    return Response.json(categories)
}

export async function PUT(req) { 
    mongoose.connect(process.env.MONGODB_URL)
    const {name,_id,available} = await req.json()
    await OfferName.updateOne({_id},{name,available})
    return Response.json(true)
}


export async function DELETE(req) {
    mongoose.connect(process.env.MONGODB_URL)
    const {_id} = await req.json()
    await OfferName.deleteOne({_id})
    return Response.json(true)
}
