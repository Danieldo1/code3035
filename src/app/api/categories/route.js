import { Category } from "../../../models/Category"

export async function POST(req) {
    const {name}= await req.json()
   const category = await Category.create({name})
    return Response.json(category)
}

export async function GET() {
    const categories = await Category.find()
    return Response.json(categories)
}

export async function PUT(req) {
    const {name,_id} = await req.json()
    await Category.updateOne({_id},{name})
    return Response.json(true)
    
}