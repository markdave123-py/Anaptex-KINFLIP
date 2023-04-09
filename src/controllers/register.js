import {Speaker, Attendee} from "../models/user.js";


export const registerSpeaker = async (req, res) => {
    const { name , email, phoneNumber, country, brandName, socialMediaLink } = req.body

    if(!name || !email || !phoneNumber || !country || !brandName || !socialMediaLink){
        res.status(403).json({message: 'pls input the required infromations!!'})
    }

    const userExists = await Speaker.findOne({email: email})

    if (userExists){
        res.status(403).json({message: 'user with this email already exists!!'})
        console.log('user with this email already exists!!');
        return
    }

    try {
    const speaker = new Speaker({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        country: country,
        brandName: brandName, 
        socialMediaLink: socialMediaLink
    })

    await speaker.save()
    console.log('user sucessfully created')
    return res.json({
        speaker: speaker
    })
    
  } catch (error) {
    console.log(error.message);
    }


   
}

export const registerAttendee = async (req, res) => {
    const { name , email } = req.body

    if(!name || !email){
        res.status(403).json({message: 'pls input the required infromations!!'})
    }

    const userExists = await Attendee.findOne({email: email})

    if (userExists){
        res.status(403).json({message: 'user with this email already exists!!'})
        console.log('user with this email already exists!!');
        return 
    }

    try {
        const attendee = new Attendee({
            name: name,
            email: email
        })
        await attendee.save()
        console.log('user sucessfully created')
        return res.json({
            attendee: attendee
         })
    } catch (error) {
        console.log(error.message)
    }
}


export const getSpeakers = async (req, res, next) => {
    const speakers = await Speaker.find()
    const attendee = await Attendee.find()

    res.json({
        speakers: speakers,
        attendee: attendee
    })

    return 
}
