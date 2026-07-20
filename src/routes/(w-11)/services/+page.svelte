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
		<section class={["flex flex-col justify-around w-11/12 md:w-8/12 border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)] p-6 space-y-6", index % 2 !== 0 ? 'self-end' : '']}>
			<h2 class="h2">{service.title}</h2>
			<p class="text-justify">{service.content}</p>
			<a href={service.link} class="self-end rounded-none btn btn-xl bg-brand-light border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)] transform transition duration-300 hover:scale-98 hover:shadow-[2px_2px_0px_1px_rgba(0,_0,_0,_1)] transform transition duration-300 hover:scale-98 hover:shadow-[2px_2px_0px_1px_rgba(0,_0,_0,_1)]">En savoir plus</a>
		</section>
	{/each}
</div>

