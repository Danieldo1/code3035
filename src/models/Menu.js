import { Schema, model,models } from "mongoose";

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
    }


},{timestamps: true})

export const Menu = models?.Menu || model("Menu", MenuSchema)