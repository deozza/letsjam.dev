import { PUBLIC_ENVIRONMENT } from '$env/static/public';
import type { LayoutServerLoad } from './$types';
export const prerender = PUBLIC_ENVIRONMENT !== 'DEV';
import { links } from '$lib/server/config/navbar';

export const load: LayoutServerLoad = async ({ url }) => {
	
	return {
		currentUri: url.pathname,
		links
	};
};
