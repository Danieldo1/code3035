import { Menu } from "../../../models/Menu"
import mongoose from "mongoose"

export async function POST(req) {
    mongoose.connect(process.env.MONGODB_URL)
    const data = await req.json()
    const response =  Menu.create(data)
    return Response.json(response)
}
export async function PUT(req) {
    mongoose.connect(process.env.MONGODB_URL)
    const {_id, ...data} = await req.json()
     await Menu.findByIdAndUpdate(_id, data)
    return Response.json(true)

}

export async function GET() {
    mongoose.connect(process.env.MONGODB_URL)
    const menus = await Menu.find()
    return Response.json(menus)
}