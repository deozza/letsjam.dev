<script lang="ts">
	interface Props {
	  breadcrumbs: Array<{name: string, slug: string}>;
	}

	let { breadcrumbs }: Props = $props();
  
</script>

<ol class="flex items-center gap-4">
	{#each breadcrumbs as link,index}
		{#if index < breadcrumbs.length - 1}
			<li><a class="anchor" href={link.slug}>{link.name}</a></li>
			<li class="opacity-50" aria-hidden>&rsaquo;</li>
		{:else}
			<li>{link.name}</li>
		{/if}
	{/each}
</ol>
