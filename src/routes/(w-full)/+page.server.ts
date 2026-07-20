import type { PageServerLoad } from './$types';
import HomePageSeo from '$lib/server/config/SEO/pages/HomePageSeo';

export const load: PageServerLoad = async ({ fetch, params }) => {

	const homePageSeo: HomePageSeo = new HomePageSeo();
	return {
		seoProps: homePageSeo.getSeoProps({}, params),
	};
};
