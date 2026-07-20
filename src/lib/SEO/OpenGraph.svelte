<script lang="ts">

	import type { Seo } from './types';

	interface Props {
		seo: Seo
	}
	
	let {
		seo
	}: Props = $props();
</script>

<svelte:head>
	<meta property="og:site_name" content={seo.siteTitle} />
	<meta property="og:locale" content={seo.ogLanguage} />
	<meta property="og:url" content={seo.url} />
	<meta property="og:type" content={'website'} />
	<meta property="og:title" content={seo.pageTitle} />
	<meta property="og:description" content={seo.metadescription} />
	{#if seo.ogImage}
		<meta property="og:image" content={seo.ogImage.url} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="627" />
		<meta property="og:image:alt" content={seo.ogImage.alt} />
	{/if}
</svelte:head>
