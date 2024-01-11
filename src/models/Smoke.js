import { Schema,models,model } from "mongoose";


const SmokeCategorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const SmokeCategory = models?.SmokeCategory || model("SmokeCategory", SmokeCategorySchema)