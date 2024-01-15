import {SmokeCategory} from '../../../../models/Smoke'
import mongoose from "mongoose"

export async function PUT(req) {
    try {
      mongoose.connect(process.env.MONGODB_URL);
      const { orderedCategories } = await req.json();
      // Use a bulk write operation or individual updates to update the order of each category

      const updatePromises = orderedCategories.map((cat) =>
      SmokeCategory.updateOne({ _id: cat._id }, { $set: { order: cat.order } })
      );
      await Promise.all(updatePromises);
  
      return Response.json({ message: 'Order updated successfully' });
    } catch (error) {
      console.error(error);
      return Response.json({ error: 'Failed to update order' }, { status: 500 });
    }
  }