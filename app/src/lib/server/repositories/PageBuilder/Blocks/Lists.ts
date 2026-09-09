import { stepFields } from "$lib/server/repositories/PageBuilder/Blocks/Steps";

export const listFields = [
	'*', {
		items: [
			'*', {
				steps_id: stepFields
			}
		]
	}
	
]
