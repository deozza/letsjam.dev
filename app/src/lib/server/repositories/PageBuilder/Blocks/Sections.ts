import { headerFields } from "../Elements/Headers";
import { paragraphFields } from "../Elements/Paragraphs";
import { richTextFields } from "../Elements/RichTexts";
import { accordionFields } from "./Accordions";
import { cardFields } from "./Cards";
import { gridFields } from "./Grids";
import { listFields } from "./Lists";

export const sectionFields = [
	'*',{
		elements: [
			'collection',{
				item: {
					richTexts: richTextFields,
					headers: headerFields,
					paragraphs: paragraphFields,
					cards: cardFields,
					grids: gridFields,
					lists: listFields,
					accordions: accordionFields
				}
			}
		]
	}
]
