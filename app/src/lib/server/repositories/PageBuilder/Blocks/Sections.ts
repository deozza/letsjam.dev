import { headerFields } from "../Elements/Headers";
import { richTextFields } from "../Elements/RichTexts";
import { cardFields } from "./Cards";
import { gridFields } from "./Grids";

export const sectionFields = [
	'*',{
		elements: [
			'collection',{
				item: {
					richTexts: richTextFields,
					headers: headerFields,
					cards: cardFields,
					grids: gridFields
				}
			}
		]
	}
]
