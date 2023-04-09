import { registerAttendee, registerSpeaker } from "../controllers/register.js";
import { validateAttendee, validateSpeaker } from "../joiValidation/joiValidation.js";
import { getSpeakers } from "../controllers/register.js";
import { Router } from "express";

export const attendeeRouter = Router()
export const speakerRouter = Router()
export const getRouter = Router()

attendeeRouter.post('/register/attendee', validateAttendee, registerAttendee);
speakerRouter.post('/register/speaker', validateSpeaker, registerSpeaker);
getRouter.get('/get', getSpeakers)
