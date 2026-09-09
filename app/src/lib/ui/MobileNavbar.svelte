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

<Navigation layout="bar" class="md:hidden bg-surface-50 border-b-2">
	<Navigation.Menu class="grid grid-cols-5">
		{#each links as link}
			<Navigation.TriggerAnchor href={link.href}>
				{#if link.img !== undefined}
					<Navigation.TriggerText class={[isCurrentPage(link.href, currentUri) ? 'text-secondary-500' : 'text-dark']}>
						<img src={link.img} alt={link.content} width="36" class="transform transition duration-500 hover:scale-105"/>
					</Navigation.TriggerText>
				{:else}
					<Navigation.TriggerText class={[isCurrentPage(link.href, currentUri) ? 'text-secondary-500' : 'text-dark']}>{link.content}</Navigation.TriggerText>
				{/if}
			</Navigation.TriggerAnchor>
		{/each}
	</Navigation.Menu>
</Navigation>
