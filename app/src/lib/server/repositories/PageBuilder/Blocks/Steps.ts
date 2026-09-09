import { paragraphFields } from "$lib/server/repositories/PageBuilder/Elements/Paragraphs";
import { richTextFields } from "$lib/server/repositories/PageBuilder/Elements/RichTexts";

export const stepFields = [
	'*', {
		title: paragraphFields,
		content: richTextFields
	}
]
