<script lang="ts">
	import Icon from "@iconify/svelte";
	import NavbarLink from '$lib/ui/NavbarLink.svelte';
	
	interface Props {
	  links: Array<{
	    href: string;
	    content: string;
	    icon: string|undefined;
	    img: string|undefined;
	  }>
	}

	let { links }: Props = $props();
  
</script>

<footer class="flex flex-col items-center justiy-between bg-surface-800">
	<div class="w-11/12 py-6 flex flex-row items-center justify-between">
		<div class="w-1/2 flex flex-col items-start justify-end space-y-2">
			{#each links as link}
				<NavbarLink href={link.href} currentUri="" target={link.target} textSize="text-base">{link.content}</NavbarLink>
			{/each}
			<div class="flex flex-row flex-wrap items-center justify-center space-x-2">
				<NavbarLink target="_blank" href="https://www.github/deozza" currentUri=""><Icon icon="mdi:linkedin" class="size-elem-3xl" /></NavbarLink>
				<NavbarLink target="_blank" href="https://www.github.com/deozza" currentUri=""><Icon icon="mdi:github" class="size-elem-3xl" /></NavbarLink>
			</div>
		</div>
		<div class="w-1/2">
			<p class="text-end">Site réalisé par <a class="anchor" target="_parent"  href="/">©Letsjam</a>. Reprenez le contrôle de votre code.</p>
		</div>
	</div>
</footer>
