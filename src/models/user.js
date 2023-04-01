import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    registeredAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }

});

export const User = mongoose.model('User', userSchema);