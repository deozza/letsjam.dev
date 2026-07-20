<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import Icon from "@iconify/svelte";
	import NavbarLink from '$lib/ui/NavbarLink.svelte';
	
	interface Props {
	  currentUri: string;
	  links: Array<{
	    href: string;
	    content: string;
	    icon: string|undefined;
	    img: string|undefined;
	  }>
	}

	let { links, currentUri }: Props = $props();
  
</script>

<AppBar class="hidden md:block bg-surface-800">
	<AppBar.Toolbar class="grid-cols-[1fr_4fr_1fr]">
		<AppBar.Headline>
		</AppBar.Headline>
		<AppBar.Lead class="flex flex-col justify-center text-center">
			<div class="w-full flex flex-row flex-wrap items-end justify-center space-x-6">
				{#each links as link}
					{#if link.img === undefined}
						<NavbarLink href={link.href} currentUri={currentUri} target={link.target}>{link.content}</NavbarLink>
					{:else}
						<div class="flex flex-col justify-center items-center">
							<a href={link.href}>
								<img src={link.img} alt={link.content} width="64" class="transform transition duration-500 hover:scale-105"/>
							</a>
						</div>
					{/if}
				{/each}
			</div>
		</AppBar.Lead>
		<AppBar.Trail class="h-full flex justify-end items-end">
			<NavbarLink target="_blank" href="https://www.linkedin.com/in/edenn-touitou-15ba17153/" currentUri={currentUri}><Icon icon="mdi:linkedin" class="size-elem-3xl" /></NavbarLink>
			<NavbarLink target="_blank" href="https://www.github.com/deozza" currentUri={currentUri}><Icon icon="mdi:github" class="size-elem-3xl" /></NavbarLink>
		</AppBar.Trail>
	</AppBar.Toolbar>
</AppBar>
