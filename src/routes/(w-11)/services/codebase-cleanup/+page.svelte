<script lang="ts">
	import type { PageServerData } from './$types';
	import SEO from '$lib/SEO/index.svelte';
	import Breadcrumbs from '$lib/ui/Breadcrumbs.svelte';

	interface Props {
		data: PageServerData;
	}

	let { data }: Props = $props();
	
</script>

<SEO seo={data.seoProps} />

<Breadcrumbs breadcrumbs={data.seoProps.breadcrumbs} />

<h1 class="h1 font-black my-12">{data.seoProps.pageTitle}</h1>


<section class="flex flex-col items-center justify-center card preset-filled-primary-400-600 border-black rounded-none border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)] w-full p-6 my-6 space-y-6">
	<p class="h1 text-center text-black">Tout cramer et repartir sur des bases saines</p>
	<p></p>
	<div class="flex flex-col md:flex-row flex-wrap items-center justify-center space-y-2 md:space-y-0 md:space-x-6 ">
			<a href="/contact" class="btn md:btn-xl text-slate-200 preset-filled-surface-600-400 border-black rounded-none border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)]">Nucléariser mon code</a>
	</div>
</section>
