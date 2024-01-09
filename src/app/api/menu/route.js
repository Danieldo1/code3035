import { Menu } from "../../../models/Menu"
import mongoose from "mongoose"

export async function POST(req) {
    mongoose.connect(process.env.MONGODB_URL)
    const data = await req.json()
    const response =  Menu.create(data)
    return Response.json(response)
}