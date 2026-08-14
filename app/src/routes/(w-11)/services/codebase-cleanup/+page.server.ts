import type { PageServerLoad } from './$types';
import CodebaseCleanupPageSeo from '$lib/server/config/SEO/pages/CodebaseCleanupPageSeo';
import getDirectusInstance from '$lib/server/directus';
import { PRIVATE_DIRECTUS_URL } from '$env/static/private';
import { readItems } from '@directus/sdk';
import { error } from '@sveltejs/kit';
import type { Pages } from '$lib/server/modeles/Pages';
import { pageFields } from '$lib/server/repositories/Pages';

export const load: PageServerLoad = async ({ fetch, url, params }) => {
	const directus = getDirectusInstance(fetch, PRIVATE_DIRECTUS_URL);
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


	const codebaseCleanupPageSeo: CodebaseCleanupPageSeo= new CodebaseCleanupPageSeo(page);
	return {
		seoProps: codebaseCleanupPageSeo.getSeoProps(),
		page
	};
};
