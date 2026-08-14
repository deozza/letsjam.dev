<script lang="ts">
	import type { Paragraphs } from "$lib/server/modeles/PageBuilder/Elements/Paragraphs";
	import { selfAlignmentMapping } from "$lib/utils";

	interface Props {
		element: Paragraphs;
	}

	let { element }: Props = $props();

</script>

<p class={[`text-${element.alignement}`, selfAlignmentMapping.get(element.alignement) || '', element.size, `font-${element.fontWeight}`]}>
  {element.content}
</p>
