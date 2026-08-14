<script lang="ts">
	import {isCurrentPage} from '$lib/utils';
	
	interface Props {
		href: string;
		currentUri: string;
		children: import('svelte').Snippet;
		target: '_self' | '_blank' | undefined;
		textSize: string,
	}

	let { href, currentUri, target = '_self', textSize = 'text-xl', children }: Props = $props();

</script>


<a {href} {target} class={["hover:text-secondary-500 transition-all duration-300", textSize, isCurrentPage(href, currentUri) ? 'text-secondary-500' : '']}>
  	{@render children?.()}
</a>
