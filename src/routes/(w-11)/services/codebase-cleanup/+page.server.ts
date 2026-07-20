import type { PageServerLoad } from './$types';
import CodebaseCleanupPageSeo from '$lib/server/config/SEO/pages/CodebaseCleanupPageSeo';

export const load: PageServerLoad = async ({ fetch, params }) => {

	const codebaseCleanupPageSeo: CodebaseCleanupPageSeo= new CodebaseCleanupPageSeo();
	return {
		seoProps: codebaseCleanupPageSeo.getSeoProps({}, params),
	};
};
