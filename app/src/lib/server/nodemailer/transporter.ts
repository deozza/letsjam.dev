import { env } from '$env/dynamic/private';
import nodemailer from "nodemailer";

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: env.PRIVATE_SMTP_HOST,
  port: 465,
  secure: true, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: env.PRIVATE_SMTP_USER,
    pass: env.PRIVATE_SMTP_PASS,
  },
});

export default transporter;
