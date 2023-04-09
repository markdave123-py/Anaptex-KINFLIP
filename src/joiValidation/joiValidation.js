import { speakerSchema } from "../joiSchema/Joischema.js";
import { attendeeSchema } from "../joiSchema/Joischema.js";

export const validateSpeaker =  (req, res, next) => {
    try {
        const {err, value} = speakerSchema.validate(req.body);

        if (err) {
            console.log(err)
            return res.status(400).json({
                message: `Can not register ${err.message}`
            })
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: `An error occured ${error.message}`
        })
    }
}
export const validateAttendee =  (req, res, next) => {
    try {
        const {err, value} = attendeeSchema.validate(req.body);

        if (err) {
            console.log(err)
            return res.status(400).json({
                message: `Can not register ${err.message}`
            })
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: `An error occured ${error.message}`
        })
    }
}