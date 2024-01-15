import { SmokeMenu } from "../../../../models/SmokeMenu"
import mongoose from "mongoose"

export async function PUT(req) {
    mongoose.connect(process.env.MONGODB_URL);
    const { orderedMenu } = await req.json(); // assuming orderedMenu is an array of {_id, order}
    
    // Create a bulk operation
    const bulkOps = orderedMenu.map(item => ({
        updateOne: {
            filter: { _id: item._id },
            update: { order: item.order }
        }
    }));
    
    // Execute the bulk operation
    await SmokeMenu.bulkWrite(bulkOps);
    
    return Response.json({ success: true });
}