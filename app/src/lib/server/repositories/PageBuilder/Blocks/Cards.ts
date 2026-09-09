import { paragraphFields } from "$lib/server/repositories/PageBuilder/Elements/Paragraphs";
import { richTextFields } from "$lib/server/repositories/PageBuilder/Elements/RichTexts";
import { gridFields } from "$lib/server/repositories/PageBuilder/Blocks/Grids";

export const cardFields = [
	'*', {
		title: paragraphFields,
		content: richTextFields,
		footer: gridFields
	}
]
