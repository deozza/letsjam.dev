import type { PageServerLoad } from './$types';
import ServicesPageSeo from '$lib/server/config/SEO/pages/ServicesPageSeo';
import getDirectusInstance from '$lib/server/directus';
import { readItems } from '@directus/sdk';
import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { Pages } from '$lib/server/modeles/Pages';
import { pageFields } from '$lib/server/repositories/Pages';

export const load: PageServerLoad = async ({fetch, url}) => {

	const directus = getDirectusInstance(fetch, env.PRIVATE_DIRECTUS_URL);
	const page: Pages = await directus
		.request(
			readItems('pages', {
				fields: pageFields,
				filter: {
					uri: {
						_eq: url.pathname
					}
				},
				limit: 1
			})
		)
		.then((pages: Array<Pages>) => {
			if(pages.length === 1) {
				return pages[0];
			} else {
				error(404, {
					message: 'Not found'
				});
			}
		})
		.catch((e) => {
			console.log(e)
			error(404, {
				message: e.message
			});
		});
		
	const servicesPageSeo: ServicesPageSeo = new ServicesPageSeo(page);

	return {
		seoProps: servicesPageSeo.getSeoProps(),
		page
	};
};
