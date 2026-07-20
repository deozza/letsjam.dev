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

<footer class="grid grid-cols-3 gap-2 bg-surface-50 p-6 border-t-2">
	<div class="flex flex-col items-start justify-end space-y-2">
		{#each links as link}
			<NavbarLink href={link.href} currentUri="" target={link.target} textSize="text-base">{link.content}</NavbarLink>
		{/each}
		<div class="flex flex-row flex-wrap items-center justify-center space-x-2">
			<NavbarLink target="_blank" href="https://www.linkedin.com/in/edenn-touitou-15ba17153/" currentUri=""><Icon icon="mdi:linkedin" class="size-elem-3xl" /></NavbarLink>
			<NavbarLink target="_blank" href="https://www.github.com/deozza" currentUri=""><Icon icon="mdi:github" class="size-elem-3xl" /></NavbarLink>
		</div>
	</div>
	<div class="flex flex-col items-start justify-end space-y-2">
		<NavbarLink target="_blank" href="/legals" currentUri="" textSize="text-base">Mentions légales</NavbarLink>
	</div>
	<div class="flex flex-col items-start justify-end space-y-2">
		<p class="text-end">Site réalisé par <a class="anchor text-secondary-500" target="_parent" href="/">©Letsjam</a>. Reprenez le contrôle de votre code.</p>
	</div>
</footer>
