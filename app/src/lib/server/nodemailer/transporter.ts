import { PRIVATE_SMTP_HOST} from '$env/static/private';
import { PRIVATE_SMTP_USER } from '$env/static/private';
import { PRIVATE_SMTP_PASS } from '$env/static/private';
import nodemailer from "nodemailer";

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: PRIVATE_SMTP_HOST,
  port: 465,
  secure: true, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: PRIVATE_SMTP_USER,
    pass: PRIVATE_SMTP_PASS,
  },
});

export default transporter;
