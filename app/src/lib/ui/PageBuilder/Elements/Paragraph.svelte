<script lang="ts">
	import type { Paragraphs } from "$lib/server/modeles/PageBuilder/Elements/Paragraphs";
	import { selfAlignmentMapping } from "$lib/utils";

	interface Props {
		element: Paragraphs;
	}

	let { element }: Props = $props();

</script>

<p class={[`text-${element.alignement}`, `self-${selfAlignmentMapping.get(element.alignement)}` || '', element.size, `font-${element.fontWeight}`, `text-${element.style}`]}>
  {element.content}
</p>

<style lang='postcss' scoped>
	@reference "tailwindcss";
	@reference "../../../../routes/layout.css";

	p.text-primary {
		@apply text-primary-500;
	}
</style>
