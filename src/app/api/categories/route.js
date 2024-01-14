import { Category } from "../../../models/Category"
import mongoose from "mongoose"

export async function POST(req) {
    console.group(req)
    mongoose.connect(process.env.MONGODB_URL)
    const {name}= await req.json()
   const category = await Category.create({name})
    return Response.json(category)
}

export async function GET() {
    mongoose.connect(process.env.MONGODB_URL)
    const categories = await Category.find().sort('order');
    return Response.json(categories)
}

// export async function PUT(req) {
//     try {
//       mongoose.connect(process.env.MONGODB_URL);
//       const { name, _id } = await req.json();
//       await Category.updateOne({ _id }, { name });
//       return Response.json({ message: 'Category name updated successfully' });
//     } catch (error) {
//       console.error(error);
//       return Response.json({ error: 'Failed to update category name' }, { status: 500 });
//     }
//   }

export async function DELETE(req) {
    mongoose.connect(process.env.MONGODB_URL)
    const {_id} = await req.json()
    await Category.deleteOne({_id})
    return Response.json(true)
}

export async function PUT(req) {
    try {
      mongoose.connect(process.env.MONGODB_URL);
      const { orderedCategories } = await req.json();
      // Use a bulk write operation or individual updates to update the order of each category

      const updatePromises = orderedCategories.map((cat) =>
        Category.updateOne({ _id: cat._id }, { $set: { order: cat.order } })
      );
      await Promise.all(updatePromises);
  
      return Response.json({ message: 'Order updated successfully' });
    } catch (error) {
      console.error(error);
      return Response.json({ error: 'Failed to update order' }, { status: 500 });
    }
  }

// export async function updateCategoriesOrder(req) {
//     try {
//       mongoose.connect(process.env.MONGODB_URL);
//       const { orderedCategories } = await req.json();
//       const updatePromises = orderedCategories.map((cat) =>
//         Category.updateOne({ _id: cat._id }, { $set: { order: cat.order } })
//       );
//       await Promise.all(updatePromises);
//       return Response.json({ message: 'Categories order updated successfully' });
//     } catch (error) {
//       console.error(error);
//       return Response.json({ error: 'Failed to update categories order' }, { status: 500 });
//     }
//   }