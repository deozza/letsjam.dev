<script lang="ts">
	import type { SvelteComponent } from "svelte";
	import Card from "./Card.svelte";
	import Button from "../Elements/Button.svelte";
	import type { Grids } from "$lib/server/modeles/PageBuilder/Blocks/Grids";
	import { selfAlignmentMapping } from "$lib/utils";

	interface Props {
		element: Grids;
	}

	let { element}: Props = $props();

	const componentMapping: Map<string, SvelteComponent> = new Map([
		['buttons', Button],
	  ['cards', Card]
	]);


</script>

<div class={['grid', 'gap-6', element.columns !== undefined && element.columns !== null && `md:grid-cols-${element.columns}`, element.rows !== undefined && element.rows !== null && `md:grid-rows-${element.rows}`, selfAlignmentMapping.get(element.alignement) || '']}>
  {#each element.elements as item}
    {@const SvelteComponent = componentMapping.get(item.collection)}
    <SvelteComponent element={item.item} />
  {/each}
  
</div>
