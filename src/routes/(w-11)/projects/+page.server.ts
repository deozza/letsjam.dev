import ProjectsPageSeo from '$lib/server/config/SEO/pages/ProjectsPageSeo';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {

	const projectsPageSeo: ProjectsPageSeo = new ProjectsPageSeo();
	return {
		seoProps: projectsPageSeo.getSeoProps({}, params),
	};
};
