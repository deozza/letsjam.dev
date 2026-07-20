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



<section class="">
	<h2 class="h2 text-center my-6">Cours disponibles</h2>
	<div class="grid md:grid-cols-3 gap-6">
		{#each data.courses as course}
			<div class="card preset-filled-surface-500 shadow-[2px_2px_0px_1px_rgba(219,_126,_59,_0.5)] p-6">
				<h2 class="h4 pb-4 text-primary-500 text-center">{course.title}</h2>
				<p class="text-justify">{course.content}</p>
			</div>
		{/each}
	</div>
</section>


<div class="flex flex-row flex-wrap items-center justify-center w-full">
	<section class="flex flex-row-reverse flex-wrap items-center justify-around card preset-filled-primary-400-600 p-6 my-6 space-y-6">
		<div class="flex flex-col items-center justify-center md:w-7/12 space-y-6">
			<p class="h1 text-center text-black">Intéressé.e par un cours ?</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend lobortis dolor semper mollis. Etiam et nibh vitae libero tristique malesuada id ac risus. Phasellus aliquam lorem id dolor condimentum.</p>
		</div>
		<div class="flex flex-col md:flex-row flex-wrap items-center justify-center space-y-2 md:space-y-0 md:space-x-6 ">
			<a href="/contact" class="btn md:btn-xl preset-filled-surface-600-400 text-slate-200 shadow-[2px_2px_0px_1px_rgba(0,_0,_0,_0.5)]">Demander une intervention</a>
		</div>
	</section>
</div>

<section class="">
	<h2 class="h2 text-center my-6">Mentoring</h2>
	<div class="grid md:grid-cols-2 gap-6">
		{#each data.mentoring as mentoring}
			<div class="card preset-outlined-surface-500 shadow-[2px_2px_0px_1px_rgba(219,_126,_59,_0.5)] p-6">
				<h2 class="h4 pb-4 text-primary-500 text-center">{mentoring.title}</h2>
				<p class="text-justify">{@html mentoring.content}</p>
			</div>
			
		{/each}
	</div>
</section>

<div class="flex flex-row flex-wrap items-center justify-center w-full">
	<section class="flex flex-row flex-wrap items-center justify-around card preset-filled-surface-600-400 p-6 my-6 space-y-6">
		<div class="flex flex-col items-center justify-center md:w-7/12 space-y-6">
			<p class="h1 text-center text-brand-light">Besoin d'un coup de main ?</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend lobortis dolor semper mollis. Etiam et nibh vitae libero tristique malesuada id ac risus. Phasellus aliquam lorem id dolor condimentum.</p>
		</div>
		<div class="flex flex-col md:flex-row flex-wrap items-center justify-center space-y-2 md:space-y-0 md:space-x-6 ">
			<a href="/contact" class="btn md:btn-xl preset-filled-brand shadow-[2px_2px_0px_1px_rgba(0,_0,_0,_0.5)]">Venir discuter</a>
		</div>
	</section>
</div>
