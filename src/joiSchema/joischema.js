import joi from 'joi'

export const speakerSchema = joi.object().keys({
    name: joi.string().required(),
    email: joi.string().email().required(),
    phoneNumber: joi.string().required(),
    country: joi.string().required(),
    brandName: joi.string().required(),
    socialMediaLink: joi.string().required()
    
})


export const attendeeSchema = joi.object().keys({
    name: joi.string().required(),
    email: joi.string().email().required()
})