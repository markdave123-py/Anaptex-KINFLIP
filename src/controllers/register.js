import {Speaker, Attendee} from "../models/user";


export const registerSpeaker = async (req, res) => {
    const { name , email, phoneNumber, country, brandName, socialMediaLink } = req.body

    const userExsists = await Speaker.findOne({email: email})
    .then(user => {
        if (user){
            console.log('user with this email already exists!!')
        }else{
            try {
                const user = Speaker.create({
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

    })

   
}

export const registerAttendee = async (req, res) => {
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
