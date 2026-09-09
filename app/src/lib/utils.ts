export const isCurrentPage = (href: string, currentPage: string): boolean => {
	if(href.length === 1) {
		return currentPage === href;
	}

	return decodeURI(currentPage).includes(href) && href.length > 1;
}

export const getNormalizedString = (stringToNormalize: string): string => {
	return stringToNormalize
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/\s/g, '-')
		.trim();
};

export const selfAlignmentMapping: Map<string, string> = new Map([
	['left', 'start'],
	['right', 'end']
])

export const contactMailObjectMapping: Map<string, string> = new Map([
	['website-audit', 'un audit de votre site'],
	['website-redevelop', 'la reprise de votre site'],
	['website-from-scratch', 'la création de votre site'],
	['courses', 'un cours'],
	['mentoring', 'du mentoring'],
])
