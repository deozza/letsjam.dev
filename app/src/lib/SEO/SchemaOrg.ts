import type { Breadcrumb, Seo } from '$lib/server/SEO/types';

export const getSchemaOrgEntity = (seo: Seo, entityHash: string) => {
	return seo.entityMeta !== null
		? {
				'@type': ['Person', 'Organization'],
				'@id': `${seo.siteUrl}/#/schema/person/${entityHash}`,
				name: seo.author,
				image: {
					'@type': 'ImageObject',
					'@id': `${seo.siteUrl}/#personlogo`,
					inLanguage: seo.siteLanguage,
					url: seo.entityMeta.url,
					width: seo.entityMeta.faviconWidth,
					height: seo.entityMeta.faviconHeight,
					caption: seo.author
				},
				logo: {
					'@id': `${seo.siteUrl}/#personlogo`
				},
				sameAs: [
					`https://www.youtube.com/channel/${seo.youtubeChannelId}`,
					`https://www.instagram.com/${seo.instagramPage}`,
					seo.facebookPage
				]
			}
		: null;
};

export const getSchemaOrgWebsite = (seo: Seo, entityHash: string) => {
	return {
		'@type': 'WebSite',
		'@id': `${seo.siteUrl}/#website`,
		url: seo.siteUrl,
		name: seo.siteTitle,
		description: seo.siteTitleAlt,
		publisher: {
			'@id': `${seo.siteUrl}/#/schema/person/${entityHash}`
		},
		potentialAction: [
			{
				'@type': 'SearchAction',
				target: `${seo.siteUrl}/?s={search_term_string}`,
				'query-input': 'required name=search_term_string'
			}
		],
		inLanguage: seo.siteLanguage
	};
};

export const getSchemaOrgImageObject = (seo: Seo) => {
	return {
		'@type': 'ImageObject',
		'@id': `${seo.url}#primaryimage`,
		inLanguage: seo.siteLanguage,
		url: seo.featuredImage.url,
		contentUrl: seo.featuredImage.url,
		width: seo.featuredImage.width,
		height: seo.featuredImage.height,
		caption: seo.featuredImage.caption
	};
};

export const getSchemaOrgBreadcrumbList = (seo: Seo) => {
	return {
		'@type': 'BreadcrumbList',
		'@id': `${seo.url}#breadcrumb`,
		itemListElement: seo.breadcrumbs.map((element: Breadcrumb, index: number) => ({
			'@type': 'ListItem',
			position: index + 1,
			item: {
				'@type': 'WebPage',
				'@id': `${seo.siteUrl}/${element.slug}`,
				url: `${seo.siteUrl}/${element.slug}`,
				name: element.name
			}
		}))
	};
};

export const getSchemaOrgWebPage = (seo: Seo, entityHash: string) => {
	return {
		'@type': 'WebPage',
		'@id': `${seo.url}#webpage`,
		url: seo.url,
		name: seo.pageTitle,
		isPartOf: {
			'@id': `${seo.siteUrl}/#website`
		},
		primaryImageOfPage: {
			'@id': `${seo.url}#primaryimage`
		},
		datePublished: seo.datePublished,
		dateModified: seo.lastUpdated,
		author: {
			'@id': `${seo.siteUrl}/#/schema/person/${entityHash}`
		},
		description: seo.metadescription,
		breadcrumb: {
			'@id': `${seo.url}#breadcrumb`
		},
		inLanguage: seo.siteLanguage,
		potentialAction: [
			{
				'@type': 'ReadAction',
				target: [seo.url]
			}
		]
	};
};

export const getSchemaOrgPublisher = (seo: Seo, entityHash: string) => {
	return {
		'@type': ['Person', 'Organization'],
		'@id': `${seo.siteUrl}/#/schema/person/${entityHash}`,
		name: seo.entity,
		image: {
			'@type': 'ImageObject',
			'@id': `${seo.siteUrl}/#personlogo`,
			inLanguage: seo.siteLanguage,
			url: `${seo.siteUrl}/assets/rodneylab-logo.png`,
			contentUrl: `${seo.siteUrl}/assets/rodneylab-logo.png`,
			width: 512,
			height: 512,
			caption: seo.entity
		},
		logo: {
			'@id': `${seo.siteUrl}/#personlogo`
		},
		sameAs: [
			`https://youtube.com/${seo.youtubeChannelId}`,
			`https://instagram/${seo.instagramPage}`,
			seo.facebookPage
		]
	};
};
