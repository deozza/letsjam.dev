<script lang="ts">
	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	import {isCurrentPage} from '$lib/utils';
	
	interface Props {
		currentUri: string;
	  links: Array<{
	    href: string;
	    content: string;
	    icon: string|undefined;
	    img: string|undefined;
	  }>
	}

	let { currentUri, links }: Props = $props();
</script>

<Navigation layout="bar" class="md:hidden sticky bottom-0 right-0 bg-surface-50 border-t-2">
	<Navigation.Menu class="grid grid-cols-5 gap-2">
		{#each links as link}
			{#if link.img === undefined}
				<Navigation.TriggerAnchor href={link.href}>
					<Navigation.TriggerText class={[isCurrentPage(link.href, currentUri) ? 'text-secondary-500' : 'text-dark']}>{link.content}</Navigation.TriggerText>
				</Navigation.TriggerAnchor>
			{:else}
				<Navigation.TriggerAnchor href={link.href}>
					<img src={link.img} alt={link.content} width="64" class="transform transition duration-500 hover:scale-105"/>
				</Navigation.TriggerAnchor>
			{/if}
		{/each}
	</Navigation.Menu>
</Navigation>
