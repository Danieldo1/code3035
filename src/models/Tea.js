import { Schema,models,model } from "mongoose";


const TeaCategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    order: { type: Number, default: 0 },
    description: {
        type: String,
        default: ''
    },
}, { timestamps: true });

export const TeaCategory = models?.TeaCategory || model("TeaCategory", TeaCategorySchema)