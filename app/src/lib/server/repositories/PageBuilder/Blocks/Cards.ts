import { paragraphFields } from "../Elements/Paragraphs";
import { richTextFields } from "../Elements/RichTexts";
import { gridFields } from "./Grids";

export const cardFields = [
	'*', {
		title: paragraphFields,
		content: richTextFields,
		footer: gridFields
	}
]
