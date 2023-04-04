import mongoose from "mongoose";

const speakerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    brandName: {
        type: String,
        required: true
    },
    socialMediaLink: {
        type: string,
        required: true
    }
});

const attendeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    }
})

export const Speaker = mongoose.model('speaker', speakerSchema);
export const Attendee = mongoose.model('attendee', attendeeSchema);