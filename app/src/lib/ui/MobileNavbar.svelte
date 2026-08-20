<script lang="ts">
	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	import {isCurrentPage} from '$lib/utils';
	import Icon from '@iconify/svelte';
	
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
	<Navigation.Menu class="grid grid-cols-4 gap-2">
		{#each links as link}
			<Navigation.TriggerAnchor href={link.href}>
				{#if link.icon !== undefined}
					<Icon class="size-elem-5" icon={link.icon} />
				{/if}
				{#if link.img !== undefined}
					<img src={link.img} alt={link.content} width="36" class="transform transition duration-500 hover:scale-105"/>
				{/if}
				<Navigation.TriggerText class={[isCurrentPage(link.href, currentUri) ? 'text-secondary-500' : 'text-dark']}>{link.content}</Navigation.TriggerText>
			</Navigation.TriggerAnchor>
		{/each}
	</Navigation.Menu>
</Navigation>
