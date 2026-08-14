<script lang="ts">
	import hash from 'object-hash';
	import {
		getSchemaOrgBreadcrumbList,
		getSchemaOrgEntity,
		getSchemaOrgImageObject,
		getSchemaOrgPublisher,
		getSchemaOrgWebPage,
		getSchemaOrgWebsite
	} from '$lib/SEO/SchemaOrg';
	import type { Seo } from '$lib/server/SEO/types';

	interface Props {
		seo: Seo;
	}

	let { seo }: Props = $props();

	const entityHash = hash({ author: (() => seo.author)() }, { algorithm: 'md5' });

	const schemaOrgArray = [
		getSchemaOrgEntity((() => seo)(), entityHash),
		getSchemaOrgWebsite((() => seo)(), entityHash),
		getSchemaOrgImageObject((() => seo)()),
		getSchemaOrgBreadcrumbList((() => seo)()),
		getSchemaOrgWebPage((() => seo)(), entityHash),
		getSchemaOrgPublisher((() => seo)(), entityHash)
	];
	const schemaOrgObject = {
		'@context': 'https://schema.org',
		'@graph': schemaOrgArray
	};
	let jsonLdString = JSON.stringify(schemaOrgObject);
	let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${'<'}/script>
	`;
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLdScript}
</svelte:head>
