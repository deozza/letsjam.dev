<script lang="ts">
	import type { Cards } from "$lib/server/modeles/PageBuilder/Blocks/Cards";
	import { selfAlignmentMapping } from "$lib/utils";
	import Paragraph from "$lib/ui/PageBuilder/Elements/Paragraph.svelte";
	import RichText from "$lib/ui/PageBuilder/Elements/RichText.svelte";
	import Grid from "$lib/ui/PageBuilder/Blocks/Grid.svelte";

	interface Props {
		element: Cards;
	}

	let { element }: Props = $props();
</script>

<div class={[`card flex flex-col items-center  space-y-6 bg-${element.color} border-black rounded-none border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)] p-6 w-full md:w-${element.width}`, `self-${selfAlignmentMapping.get(element.alignment)}` || '', `justify-${selfAlignmentMapping.get(element.alignment)}` || '']}>
	{#if element.title !== undefined && element.title !== null}
		<div class="w-full pb-4">
			<Paragraph element={element.title} />
		</div>
	{/if}
	{#if element.content !== undefined && element.content !== null}
		<RichText element={element.content} />
	{/if}
	{#if element.footer !== undefined && element.footer !== null}
		<Grid element={element.footer} />
	{/if}
</div>

<style lang='postcss' scoped>
	@reference "tailwindcss";
	@reference "../../../../routes/layout.css";

	div.card.bg-primary{
		@apply preset-filled-primary-500 ;
	}

	div.card.bg-primary, .bg-tertiary > p {
		@apply text-black;
	}
	div.card.bg-secondary > p {
		@apply text-slate-200;
	}
	
	div.card.bg-secondary{
		@apply preset-filled-surface-500;
	}
	
	div.card.bg-tertiary{
		@apply preset-outlined-surface-500;
	}
</style>
