import type { PageServerLoad } from './$types';
import ServicesPageSeo from '$lib/server/config/SEO/pages/ServicesPageSeo';

export const load: PageServerLoad = async ({ fetch, params }) => {

	const servicesPageSeo: ServicesPageSeo = new ServicesPageSeo();

	const services: Array<{title: string, content: string, link: string}> = [
		{
			title: "Développement d'une application web",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend lobortis dolor semper mollis. Etiam et nibh vitae libero tristique malesuada id ac risus. Phasellus aliquam lorem id dolor condimentum.",
			link: "/services/website-development"
		},
		{
			title: "Nettoyage de code",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend lobortis dolor semper mollis. Etiam et nibh vitae libero tristique malesuada id ac risus. Phasellus aliquam lorem id dolor condimentum.",
			link: "/services/codebase-cleanup"
		},
		{
			title: "Cours et mentoring",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend lobortis dolor semper mollis. Etiam et nibh vitae libero tristique malesuada id ac risus. Phasellus aliquam lorem id dolor condimentum.",
			link: "/services/courses-and-mentoring"
		},
	]

	
	return {
		seoProps: servicesPageSeo.getSeoProps({}, params),
		services
	};
};
