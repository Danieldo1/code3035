import { Schema,models,model } from "mongoose";


const OfferCategorySchema = new Schema({
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

export const OfferCategory = models?.OfferCategory || model("OfferCategory", OfferCategorySchema)