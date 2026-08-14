import { error, redirect } from '@sveltejs/kit';
import { query, form } from '$app/server';
import * as z from "zod"; 
import { Resend } from 'resend';
import { PRIVATE_RESEND_API_KEY, PRIVATE_CONTACT_EMAIL } from '$env/static/private';
import ContactPageSeo from '$lib/server/config/SEO/pages/ContactPageSeo';

const resend = new Resend(PRIVATE_RESEND_API_KEY);

export const getSeoProps= query(() => {
	const contactPageSeo: ContactPageSeo = new ContactPageSeo();
	return {
		seoProps: contactPageSeo.getSeoProps(),
	};
});


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
		return {success: true, data: 'pouet'}
		// try {
	 //    let { data, error } = await resend.emails.send({
	 //      from: `${firstname} ${lastname} <${email}>`,
	 //      to: [PRIVATE_CONTACT_EMAIL],
	 //      subject: object,
	 //      html: message,
	 //    });

	 //    if (error) {
	 //    	return {
	 //    		success: false,
	 //    		error: error
	 //    	}
	 //    }
	    
	 //    { data, error } = await resend.emails.send({
	 //      from: PRIVATE_CONTACT_EMAIL,
	 //      to: [email],
	 //      subject: 'Votre demande de contact a été prise en compte',
	 //      html: '',
	 //    });

	 //    return {
	 //    	success: true,
	 //    	data: data
	 //    };
	 //  } catch (error) {
  //   	return {
  //   		success: false,
  //   		error: error
  //   	}
	 //  }
	}
);
