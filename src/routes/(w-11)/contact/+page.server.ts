import ContactPageSeo from '$lib/server/config/SEO/pages/ContactPageSeo';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url}) => {

	const contactPageSeo: ContactPageSeo = new ContactPageSeo();
	
	return {
		seoProps: contactPageSeo.getSeoProps(),
		object: url.searchParams.get('object')
	};
};
