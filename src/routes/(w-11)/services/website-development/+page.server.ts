import type { PageServerLoad } from './$types';
import WebsiteDevelopmentPageSeo from '$lib/server/config/SEO/pages/WebsiteDevelopmentPageSeo';

export const load: PageServerLoad = async ({ fetch, params }) => {

	const websiteDevelopmentPageSeo: WebsiteDevelopmentPageSeo = new WebsiteDevelopmentPageSeo();
	return {
		seoProps: websiteDevelopmentPageSeo.getSeoProps({}, params),
	};
};
