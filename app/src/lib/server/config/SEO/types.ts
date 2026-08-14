export type FeaturedImage = {
	url: string,
	alt: string,
	width: number,
	height: number,
	caption: string,
};

export type OgImage = {
  url: string,
  alt: string
};

export type Breadcrumb = {
  name: string,
  slug: string
}

export type EntityMeta = {  
	url: string,
	faviconWidth: number,
	faviconHeight: number,
	caption: string,
}

export type Seo = {
	breadcrumbs: Array<Breadcrumb>,
	entityMeta: EntityMeta,
	lastUpdated: string,
	datePublished: string,
	metadescription: string,
	featuredImage: FeaturedImage,
	ogImage: OgImage,
	ogLanguage: string,
	pageTitle: string,
	siteTitle: string,
	url: string,
  facebookPage: string,
  facebookAuthorPage: string
	instagramPage: string,
	youtubeChannelId: string,
	author: string,
	entity: string,
	siteLanguage: string,
	siteTitleAlt: string,
	siteUrl: string,
}
