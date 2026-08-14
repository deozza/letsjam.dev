import { sectionFields } from "./PageBuilder/Blocks/Sections";

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
