import ContactPageSeo from '$lib/server/config/SEO/pages/ContactPageSeo';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {

	const contactPageSeo: ContactPageSeo = new ContactPageSeo();
	return {
		seoProps: contactPageSeo.getSeoProps({}, params),
	};
};
