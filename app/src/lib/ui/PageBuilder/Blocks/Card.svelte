<script lang="ts">
	import type { Cards } from "$lib/server/modeles/PageBuilder/Blocks/Cards";
	import { selfAlignmentMapping } from "$lib/utils";
	import Paragraph from "../Elements/Paragraph.svelte";
	import Grid from "./Grid.svelte";

	interface Props {
		element: Cards;
	}

	let { element }: Props = $props();
</script>

<div class={['flex flex-col items-center justify-center card p-6 my-6 space-y-6', `bg-${element.style}`, `md:w-${element.width}`, selfAlignmentMapping.get(element.alignement)]}>
	{#if element.title !== undefined && element.title !== null}
		<Paragraph element={element.title} />
	{/if}
	{#if element.content !== undefined && element.content !== null}
		<Paragraph element={element.content} />
	{/if}
	{#if element.footer !== undefined && element.footer !== null}
		<Grid element={element.footer} />
	{/if}
</div>

<style lang='postcss' scoped>
	@reference "tailwindcss";
	@reference "../../../../routes/layout.css";

	div.card.bg-primary{
		@apply preset-filled-primary-500 border-black rounded-none border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)];
	}

	div.card.bg-primary, .bg-tertiary > p {
		@apply text-black;
	}
	div.card.bg-secondary > p {
		@apply text-slate-200;
	}
	
	div.card.bg-secondary{
		@apply preset-outlined-surface-500 border-black rounded-none border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)];
	}
	
	div.card.bg-tertiary{
		@apply preset-outlined-surface-500 border-black rounded-none border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)];
	}
</style>
