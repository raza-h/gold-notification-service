import { config } from "dotenv";

config();

export const THRESHOLD = process.env.THRESHOLD || 5000;
export const FROM_NUMBER = `whatsapp:${process.env.TWILIO_FROM_NUMBER}`;
