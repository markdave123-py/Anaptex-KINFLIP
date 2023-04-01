import { User } from "../models/user";
import bcrypt from "bcrypt"


export const registerUser = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email

    try {
        const user = await User.create({
            name: name,
            email: email
        })
    } catch (error) {
        console.log(error.message)
    }
}

