<script lang="ts">
	import type { Headers } from "$lib/server/modeles/PageBuilder/Elements/Headers";
	import { getNormalizedString } from "$lib/utils";

	interface Props {
		element: Headers;
	}

	let { element }: Props = $props();

</script>

<svelte:element this={element.importance} class={[element.importance, element.size, `text-${element.alignment}`, 'mb-6']} id={getNormalizedString(element.content)} >
  {element.content}
</svelte:element>
