<script lang="ts">

  import hash from 'object-hash';
	import type { Seo } from './types';

	interface Props {
		seo: Seo
	}
	
	let {
		seo
	}: Props = $props();

	const entityHash = hash({ author: seo.author }, { algorithm: 'md5' });

	const schemaOrgEntity =
		seo.entityMeta !== null
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
						caption: seo.author,
					},
					logo: {
						'@id': `${seo.siteUrl}/#personlogo`,
					},
					sameAs: [
						`https://www.youtube.com/channel/${seo.youtubeChannelId}`,
						`https://www.instagram.com/${seo.instagramPage}`,
						seo.facebookPage,
					],
				}
			: null;

	const schemaOrgWebsite = {
		'@type': 'WebSite',
		'@id': `${seo.siteUrl}/#website`,
		url: seo.siteUrl,
		name: seo.siteTitle,
		description: seo.siteTitleAlt,
		publisher: {
			'@id': `${seo.siteUrl}/#/schema/person/${entityHash}`,
		},
		potentialAction: [
			{
				'@type': 'SearchAction',
				target: `${seo.siteUrl}/?s={search_term_string}`,
				'query-input': 'required name=search_term_string',
			},
		],
		inLanguage: seo.siteLanguage,
	};

	const schemaOrgImageObject = {
		'@type': 'ImageObject',
		'@id': `${seo.url}#primaryimage`,
		inLanguage: seo.siteLanguage,
		url: seo.featuredImage.url,
		contentUrl: seo.featuredImage.url,
		width: seo.featuredImage.width,
		height: seo.featuredImage.height,
		caption: seo.featuredImage.caption,
	};

	const schemaOrgBreadcrumbList = {
		'@type': 'BreadcrumbList',
		'@id': `${seo.url}#breadcrumb`,
		itemListElement: seo.breadcrumbs.map((element, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			item: {
				'@type': 'WebPage',
				'@id': `${seo.siteUrl}/${element.slug}`,
				url: `${seo.siteUrl}/${element.slug}`,
				name: element.name,
			},
		})),
	};

	const schemaOrgWebPage = {
		'@type': 'WebPage',
		'@id': `${seo.url}#webpage`,
		url: seo.url,
		name: seo.pageTitle,
		isPartOf: {
			'@id': `${seo.siteUrl}/#website`,
		},
		primaryImageOfPage: {
			'@id': `${seo.url}#primaryimage`,
		},
		datePublished: seo.datePublished,
		dateModified: seo.lastUpdated,
		author: {
			'@id': `${seo.siteUrl}/#/schema/person/${entityHash}`,
		},
		description: seo.metadescription,
		breadcrumb: {
			'@id': `${seo.url}#breadcrumb`,
		},
		inLanguage: seo.siteLanguage,
		potentialAction: [
			{
				'@type': 'ReadAction',
				target: [seo.url],
			},
		],
	};

	const schemaOrgPublisher = {
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
			caption: seo.entity,
		},
		logo: {
			'@id': `${seo.siteUrl}/#personlogo`,
		},
		sameAs: [
			`https://youtube.com/${seo.youtubeChannelId}`,
			`https://instagram/${seo.instagramPage}`,
			seo.facebookPage,
		],
	};

	const schemaOrgArray = [
		schemaOrgEntity,
		schemaOrgWebsite,
		schemaOrgImageObject,
		schemaOrgWebPage,
		schemaOrgBreadcrumbList,
		schemaOrgPublisher,
	];
	const schemaOrgObject = {
		'@context': 'https://schema.org',
		'@graph': schemaOrgArray,
	};
	let jsonLdString = JSON.stringify(schemaOrgObject);
	let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${'<'}/script>
	`;
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLdScript}
</svelte:head>
