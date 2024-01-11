import { SmokeMenu } from "../../../models/SmokeMenu"
import mongoose from "mongoose"

export async function POST(req) {
    mongoose.connect(process.env.MONGODB_URL)
    const data = await req.json()
    const response =  SmokeMenu.create(data)
    return Response.json(response)
}
export async function PUT(req) {
    mongoose.connect(process.env.MONGODB_URL)
    const {_id, ...data} = await req.json()
     await SmokeMenu.findByIdAndUpdate(_id, data)
    return Response.json(true)

}

export async function GET() {
    mongoose.connect(process.env.MONGODB_URL)
    const menus = await SmokeMenu.find()
    return Response.json(menus)
}

export async function DELETE(req) {
    mongoose.connect(process.env.MONGODB_URL)
    const {_id} = await req.json()
    await SmokeMenu.deleteOne({_id})
    return Response.json(true)
}