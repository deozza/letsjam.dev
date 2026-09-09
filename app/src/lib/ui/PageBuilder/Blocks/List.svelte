<script lang="ts">
	import type { Lists } from "$lib/server/modeles/PageBuilder/Blocks/Lists";
	import Paragraph from "$lib/ui/PageBuilder/Elements/Paragraph.svelte";
	import RichText from "$lib/ui/PageBuilder/Elements/RichText.svelte";

	
	interface Props {
		element: Lists;
	}

	let { element}: Props = $props();
</script>
{#each element.items as item, i (item) }
  
	<div class="flex flex-col items-start jutify-center w-full space-y-6">
  	{#if item.steps_id.title !== undefined && item.steps_id.title !== null}
  		<div class="flex flex-col md:flex-row flex-wrap items-start md:items-center justify-start space-x-6">
  		  {#if item.steps_id.numbered === true}
    			<p class="h1 text-secondary-500">{(i+1).toLocaleString('en-US', {minimumIntegerDigits: 2})}</p>
  			{/if}
  			<Paragraph element={item.steps_id.title} />
  		</div>
  	{/if}
  	{#if item.steps_id.content !== undefined && item.steps_id.content !== null}
  		<RichText element={item.steps_id.content} />
  	{/if}
		<hr class="hr">
	</div>
{/each}
