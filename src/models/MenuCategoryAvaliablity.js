// models/MenuCategoryAvailability.js
import { Schema, models, model } from "mongoose";

const MenuCategoryAvailabilitySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true
    },
    available: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });

export const MenuCategoryAvailability = models?.MenuCategoryAvailability || model("MenuCategoryAvailability", MenuCategoryAvailabilitySchema);