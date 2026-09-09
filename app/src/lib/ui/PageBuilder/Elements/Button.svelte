<script lang="ts">
	import type { Buttons } from "$lib/server/modeles/PageBuilder/Elements/Buttons";

	interface Props {
		element: Buttons;
	}

	let { element }: Props = $props();

</script>

{#if element.linkTo !== undefined && element.linkTo !== null} 
	<a href={element.linkTo.uri} class={['btn-base', element.style.id]} id={element.id}>{element.content}</a>
{:else if element.externalLinkTo !== undefined && element.externalLinkTo !== null} 
	<a href={element.externalLinkTo} target="_blank" class={['btn-base', element.style.id]} id={element.id}>{element.content}</a>
{/if}

<style lang='postcss' scoped>
	@reference "tailwindcss";
	@reference "../../../../routes/layout.css";

	a.btn-base {
		@apply btn md:btn-xl border-black rounded-none border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)] transform transition duration-300 hover:scale-98 hover:shadow-[2px_2px_0px_1px_rgba(0,_0,_0,_1)];
	}

	a.btn-base.primary{
		@apply bg-brand-light text-black;
	}
	
	a.btn-base.secondary{
		@apply preset-filled-surface-500 text-slate-200;
	}
	
	a.btn-base.tertiary{
		@apply preset-filled-surface-950-50;
	}

</style>
