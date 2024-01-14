import {model, Schema, models} from 'mongoose'

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    order: { type: Number, default: 0 }
}, { timestamps: true });

export const Category = models?.Category || model("Category", CategorySchema)