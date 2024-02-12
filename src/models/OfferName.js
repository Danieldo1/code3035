import { Schema,models,model } from "mongoose";

const OfferNameSchema = new Schema({
    name: {
        type: String,
        
    },
    available: {
        type: Boolean,
        default: true
    }
    
}, { timestamps: true });

export const OfferName = models?.OfferName || model("OfferName", OfferNameSchema)