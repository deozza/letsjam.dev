import { form } from '$app/server';
import * as z from "zod"; 
import { defaultEmailSender } from '$lib/server/nodemailer/sender';
import { env } from '$env/dynamic/private';
import { contactMailObjectMapping } from '$lib/utils';

export const sendContact = form(
	z.object({
		firstname: z.string().min(2).max(150).trim(),
		lastname: z.string().min(2).max(150).trim(),
		email: z.email().max(150).trim(),
		object: z.enum(['website-audit', 'website-redevelop', 'website-from-scratch', 'courses', 'mentoring']),
		message: z.string().min(10).max(1000).trim(),
		send: z.boolean().optional()
	}),
	async ({ firstname, lastname, email, object, message, send }) => {
		if(send === true) {
			return {success: true, data: {}};
		}

		const resultContactConfirmation = await sendContactConfirmationEmail(firstname, lastname, email, object, message);
		if (resultContactConfirmation === undefined){
			return{
				sucess: false
			};
		}
		
		const resultContactForm = await sendContactFormEmail(firstname, lastname, email, object, message);
		
		return {
			success: resultContactForm !== undefined
		};
	}
);


const sendContactConfirmationEmail = async(firstname: string, lastname: string, email: string, object: string, message: string) => {
  let textMessage: string = `Bonjour ${firstname} ${lastname}. Vous venez de prendre contact sur letsjam.dev pour ${contactMailObjectMapping.get(object)} et je vous en remercie. J'étudierais votre besoin avec attention et je reviendrais vers vous dans les 24h. À très bientôt !`;
  const subject: string = 'Confirmation de prise de contact';

  return defaultEmailSender(env.PRIVATE_SMTP_USER, email, subject, textMessage, textMessage, undefined);
};

const sendContactFormEmail = async(firstname: string, lastname: string, email: string, object: string, message: string) => {
  let textMessage: string = `${firstname} ${lastname} a pris contact pour ${object} : ${message}`;

  return defaultEmailSender(env.PRIVATE_SMTP_USER, env.PRIVATE_SMTP_USER, object, textMessage, textMessage, email);
  
};
