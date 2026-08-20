<script lang="ts">
	import type { Sections } from "$lib/server/modeles/PageBuilder/Blocks/Sections";
	import type { SvelteComponent } from "svelte";
	import Header from "../Elements/Header.svelte";
	import RichText from "../Elements/RichText.svelte";
	import Card from "./Card.svelte";
	import Grid from "./Grid.svelte";
	import Paragraph from "../Elements/Paragraph.svelte";
	import List from "./List.svelte";
	import Accordion from "./Accordion.svelte";

	interface Props {
		section: Sections;
	}

	let { section }: Props = $props();

	const componentMapping: Map<string, SvelteComponent> = new Map([
	  ['richTexts', RichText],
	  ['headers', Header],
	  ['paragraphs', Paragraph],
	  ['cards', Card],
	  ['grids', Grid],
	  ['lists', List],
	  ['accordions', Accordion]
	]);


</script>

<section class="flex flex-col justify-center space-y-6 my-6 w-full">
  {#each section.elements as element}
    {element.content}
    {@const SvelteComponent = componentMapping.get(element.collection)}
    <SvelteComponent element={element.item} />
  {/each}
  
</section>
