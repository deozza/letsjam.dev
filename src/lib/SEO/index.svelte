<script lang="ts">
	import OpenGraph from './OpenGraph.svelte';
	import SchemaOrg from './SchemaOrg.svelte';
	import { type Seo } from './types';
	
	interface Props {
		seo: Seo
	}
	
	let {
		seo
	}: Props = $props();

	let pageTitle = `${seo.siteTitle}`;
	if(seo.pageTitle.length > 0) {
		pageTitle = `${seo.pageTitle} | ${pageTitle}`;
	}
	
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
