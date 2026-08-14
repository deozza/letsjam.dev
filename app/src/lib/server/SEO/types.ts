import * as z from 'zod';

const featuredImage = z.object({
	url: z.string(),
	alt: z.string(),
	width: z.number().gt(0),
	height: z.number().gt(0),
	caption: z.string()
});

const ogImage = z.object({
	url: z.string(),
	alt: z.string()
});

const breadcrumb = z.object({
	name: z.string(),
	slug: z.string()
});

const entityMeta = z.object({
	url: z.string(),
	faviconWidth: z.number().gt(0),
	faviconHeight: z.number().gt(0),
	caption: z.string()
});

const seo = z.object({
	breadcrumbs: z.array(breadcrumb),
	entityMeta: entityMeta,
	lastUpdated: z.string(),
	datePublished: z.string(),
	metadescription: z.string(),
	featuredImage: featuredImage,
	ogImage: ogImage,
	ogLanguage: z.string(),
	pageTitle: z.string(),
	siteTitle: z.string(),
	url: z.string(),
	facebookPage: z.string(),
	facebookAuthorPage: z.string(),
	instagramPage: z.string(),
	youtubeChannelId: z.string(),
	author: z.string(),
	entity: z.string(),
	siteLanguage: z.string(),
	siteTitleAlt: z.string(),
	siteUrl: z.string()
});

export type FeaturedImage = z.infer<typeof featuredImage>;
export type OgImage = z.infer<typeof ogImage>;
export type Breadcrumb = z.infer<typeof breadcrumb>;
export type EntityMeta = z.infer<typeof entityMeta>;
export type Seo = z.infer<typeof seo>;
