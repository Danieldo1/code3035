import { Schema,models,model } from "mongoose";


const SmokeCategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    order: { type: Number, default: 0 },
    description: {
        type: String,
        default: ''
    }
}, { timestamps: true });

export const SmokeCategory = models?.SmokeCategory || model("SmokeCategory", SmokeCategorySchema)