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

<h1 class="h1 font-black my-12">Mes services</h1>

<div class="flex flex-col justify-around space-y-12">

	{#each data.services as service, index}
		<section class={["flex flex-col justify-around w-11/12 md:w-8/12 preset-outlined-surface-500 shadow-[2px_2px_0px_1px_rgba(219,_126,_59,_0.5)] p-6 space-y-6", index % 2 !== 0 ? 'self-end' : '']}>
			<h2 class="h2">{service.title}</h2>
			<p class="text-justify">{service.content}</p>
			<a href={service.link} class="self-end btn btn-xl preset-filled-brand shadow-[2px_2px_0px_1px_rgba(0,_0,_0,_0.5)]">En savoir plus</a>
		</section>
	{/each}
</div>

