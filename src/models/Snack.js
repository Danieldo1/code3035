import { Schema,models,model } from "mongoose";


const SnackCategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    order: { type: Number, default: 0 },
    description: {
        type: String,
        default: ''
    },
    available: { type: Boolean, default: true }
}, { timestamps: true });

export const SnackCategory = models?.SnackCategory || model("SnackCategory", SnackCategorySchema)