import { buttonFields } from "$lib/server/repositories/PageBuilder/Elements/Buttons";
import { headerFields } from "$lib/server/repositories/PageBuilder/Elements/Headers";
import { paragraphFields } from "$lib/server/repositories/PageBuilder/Elements/Paragraphs";
import { richTextFields } from "$lib/server/repositories/PageBuilder/Elements/RichTexts";
import { accordionFields } from "$lib/server/repositories/PageBuilder/Blocks/Accordions";
import { cardFields } from "$lib/server/repositories/PageBuilder/Blocks/Cards";
import { gridFields } from "$lib/server/repositories/PageBuilder/Blocks/Grids";
import { listFields } from "$lib/server/repositories/PageBuilder/Blocks/Lists";

export const sectionFields = [
	'*',{
		elements: [
			'collection',{
				item: {
					headers: headerFields,
					paragraphs: paragraphFields,
					buttons: buttonFields,
					richTexts: richTextFields,
					cards: cardFields,
					grids: gridFields,
					lists: listFields,
					accordions: accordionFields
				}
			}
		]
	}
]
