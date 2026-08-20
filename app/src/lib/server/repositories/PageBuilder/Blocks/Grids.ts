import { buttonFields } from "../Elements/Buttons";
import { paragraphFields } from "../Elements/Paragraphs";
import { richTextFields } from "../Elements/RichTexts";

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
