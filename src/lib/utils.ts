export const isCurrentPage = (href: string, currentPage: string): boolean => {
	if(href.length === 1) {
		return currentPage === href;
	}

	return decodeURI(currentPage).includes(href) && href.length > 1;
}
