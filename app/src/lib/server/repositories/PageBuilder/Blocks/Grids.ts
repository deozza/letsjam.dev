import { buttonFields } from "../Elements/Buttons";
import { paragraphFields } from "../Elements/Paragraphs";

export const gridFields = [
	'*',{
		elements: [
			'collection',{
				item: {
					buttons: buttonFields,
					cards: [
						'*', {
							title: paragraphFields,
							content: paragraphFields,
						}
					],
				}
			}
		]
	}
]
