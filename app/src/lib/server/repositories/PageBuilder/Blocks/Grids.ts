import { styleFields } from "../Configs/Styles";
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
							style: styleFields,
							title: paragraphFields,
							content: paragraphFields,
						}
					],
				}
			}
		]
	}
]
