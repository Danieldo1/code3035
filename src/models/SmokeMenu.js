import { Schema, model,models } from "mongoose";
import mongoose from "mongoose";

const ExtraPriceSchema = new Schema({
    name:String,
    price:Number
})


const SmokeMenuSchema = new Schema({
    image: {
        type: String,
        
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Types.ObjectId,
    },
    price: {
        type: String,
        required: true
    },
    sizes: {
        type: [ExtraPriceSchema]
    },
    extras: {
        type: [ExtraPriceSchema]
    },

    available: {
        type: Boolean,
        default: true
    }, 
    order: { type: Number, default: 0 }
},{timestamps: true})

export const SmokeMenu = models?.SmokeMenu || model("SmokeMenu", SmokeMenuSchema)