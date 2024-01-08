const { Schema, models,model } = require("mongoose");

// import {model, Schema, models} from 'mongoose'


const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: value => {
if (!value?.length || value?.length < 5){ 
new Error('Password must be at least 5 characters')
return false

}
        }
    },
    name: {
        type: String,
        
    }
},{timestamps: true});

export const User = models?.User || model("User", UserSchema)
