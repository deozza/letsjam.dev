<script lang="ts">
	import type { RichTexts } from "$lib/server/modeles/PageBuilder/Elements/RichTexts";

	interface Props {
		element: RichTexts;
	}

	let { element }: Props = $props();

</script>

<div class="richTextComponent">
	{@html element.content}
</div>


<style lang="postcss" scoped>
	@reference "tailwindcss";
	@reference "../../../../routes/layout.css";

	.richTextComponent :global(p:not(:last-child)){
    @apply my-6;
	}

	.richTextComponent :global(p > a) {
		@apply anchor text-secondary-500;
	}
	
	.richTextComponent :global(p > code) {
		@apply preset-filled-primary-500;
	}
</style>
