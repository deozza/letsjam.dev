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
	['center', 'center'],
	['right', 'end']
])
