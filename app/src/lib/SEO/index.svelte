<script lang="ts">
	import OpenGraph from '$lib/SEO/OpenGraph.svelte';
	import SchemaOrg from '$lib/SEO/SchemaOrg.svelte';
	import { type Seo } from './types';

	interface Props {
		seo: Seo;
	}

	let { seo }: Props = $props();

	const pageTitle = `${(() => seo.pageTitle)()} — ${(() => seo.siteTitle)()}`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={seo.metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
</svelte:head>
<OpenGraph {seo} />
<SchemaOrg {seo} />
