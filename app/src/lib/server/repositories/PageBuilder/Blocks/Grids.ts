import { buttonFields } from "$lib/server/repositories/PageBuilder/Elements/Buttons";
import { paragraphFields } from "$lib/server/repositories/PageBuilder/Elements/Paragraphs";
import { richTextFields } from "$lib/server/repositories/PageBuilder/Elements/RichTexts";

export const gridFields = [
	'*',{
		elements: [
			'collection',{
				item: {
					buttons: buttonFields,
					cards: [
						'*', {
							title: paragraphFields,
							content: richTextFields
						}
					],
				}
			}
		]
	}
]
