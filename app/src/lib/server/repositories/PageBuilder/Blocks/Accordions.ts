import { stepFields } from "$lib/server/repositories/PageBuilder/Blocks/Steps";

export const accordionFields = [
	'*', {
		items: [
			'*', {
				steps_id: stepFields
			}
		]
	}
	
]
