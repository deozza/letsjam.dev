import { sectionFields } from "$lib/server/repositories/PageBuilder/Blocks/Sections";

export const pageFields = [
	'*', {
		parent: [
			'title',
			'uri',
			{
				parent: [
					'title',
					'uri',
					{
						parent: [
							'title',
							'uri'
						]
					}
				]
			}
		],
		sections: sectionFields
	}
]
