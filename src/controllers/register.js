import { User } from "../models/user";


export const registerSpeaker = async (req, res) => {
    const { name , email, phoneNumber, country, brandName, socialMediaLink } = req.body

    try {
        

        const user = await User.create({
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            country: country,
            brandName: brandName, 
            socialMediaLink: socialMediaLink
        })
        user.save()
    } catch (error) {
        console.log(error.message)
    }
}
