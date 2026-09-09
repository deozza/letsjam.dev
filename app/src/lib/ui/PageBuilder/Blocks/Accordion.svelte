<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	import { slide } from 'svelte/transition';
	import Icon from "@iconify/svelte";
	import type { Accordions } from '$lib/server/modeles/PageBuilder/Blocks/Accordions';
	import Paragraph from '$lib/ui/PageBuilder/Elements/Paragraph.svelte';
	import RichText from '$lib/ui/PageBuilder/Elements/RichText.svelte';
	
	interface Props {
		element: Accordions;
	}

	let { element}: Props = $props();
	
</script>

<Accordion>
	{#each element.items as item, i (item)}
		{#if i !== 0}
			<hr class="hr" />
		{/if}
		<Accordion.Item value={i}>
			<h3>
				<Accordion.ItemTrigger class="h3 font-bold flex items-center justify-between gap-2">
      		<div class="flex flex-col md:flex-row flex-wrap items-start md:items-center justify-start space-x-6">
      		  {#if item.numbered === true}
        			<p class="h1 text-secondary-500">{(i+1).toLocaleString('en-US', {minimumIntegerDigits: 2})}</p>
      			{/if}
  				  <Paragraph element={item.steps_id.title} />
      		</div>
					<Accordion.ItemIndicator class="group">
						<Icon icon="mdi:chevron-down" class="h-5 w-5 transition group-data-[state=open]:rotate-180" />
					</Accordion.ItemIndicator>
				</Accordion.ItemTrigger>
			</h3>
			<Accordion.ItemContent>
				{#snippet element(attributes)}
					{#if !attributes.hidden}
						<div {...attributes} transition:slide={{ duration: 150 }}>
						  <RichText element={item.steps_id.content} />
						</div>
					{/if}
				{/snippet}
			</Accordion.ItemContent>
		</Accordion.Item>
	{/each}
</Accordion>
