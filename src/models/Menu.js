import { Schema, model,models } from "mongoose";

const ExtraPriceSchema = new Schema({
    name:String,
    price:Number
})


const MenuSchema = new Schema({
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
    price: {
        type: Number,
        required: true
    },
    sizes: {
        type: [ExtraPriceSchema]
    },
    extras: {
        type: [ExtraPriceSchema]
    },


},{timestamps: true})

export const Menu = models?.Menu || model("Menu", MenuSchema)