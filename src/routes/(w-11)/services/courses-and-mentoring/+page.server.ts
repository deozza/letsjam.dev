import type { PageServerLoad } from './$types';
import CoursesAndMentoringPageSeo from '$lib/server/config/SEO/pages/CoursesAndMentoringPageSeo';

export const load: PageServerLoad = async ({ fetch, params }) => {

	const coursesAndMentoringPageSeo: CoursesAndMentoringPageSeo = new CoursesAndMentoringPageSeo();
	return {
		seoProps: coursesAndMentoringPageSeo.getSeoProps({}, params),
	};
};
