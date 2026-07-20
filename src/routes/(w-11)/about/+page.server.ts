import AboutPageSeo from '$lib/server/config/SEO/pages/AboutPageSeo';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {

	const aboutPageSeo: AboutPageSeo = new AboutPageSeo();
	return {
		seoProps: aboutPageSeo.getSeoProps({}, params),
	};
};
