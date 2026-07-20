<script lang="ts">
	import type { PageServerData } from './$types';
	import SEO from '$lib/SEO/index.svelte';

	interface Props {
		data: PageServerData;
	}

	let { data }: Props = $props();
	
</script>

<SEO seo={data.seoProps} />


<section class="relative">
    <img class="w-full object-cover" src="https://images.unsplash.com/photo-1478800907959-cd1621fbd465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDJ8fHBlZGFsYm9hcmR8ZW58MHx8fHwxNzUwMDE1MTg4fDA&ixlib=rb-4.1.0&q=80&w=2000" alt="Random image">
    <div class="absolute inset-0 bg-gray-700 opacity-60"></div>
    <div class="absolute inset-0 flex flex-col w-2/3 p-6 space-y-6 justify-center">
    		<h1 class="uppercase h1 md:text-7xl text-slate-200 text-shadow-lg/30">Letsjam</h1>
        <p class="md:text-5xl text-slate-200 text-shadow-lg/30">Reprenez le contrôle sur votre code</p>
    </div>
</section>
