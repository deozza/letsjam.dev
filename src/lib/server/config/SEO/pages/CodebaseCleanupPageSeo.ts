import website from "$lib/server/config/website";
import AbstractSeoForPage from "$lib/server/config/SEO/pages/AbstractSeoForPage";
import type { Breadcrumb, Seo } from "$lib/server/config/SEO/types";
import type { RouteParams } from "../../../../../routes/$types";

export default class CodebaseCleanupPageSeo extends AbstractSeoForPage<any, RouteParams> {
    public getSeoProps(data: any, params: RouteParams): Seo {
    	const { author, entity, siteUrl, ogLanguage, siteTitle, siteLanguage, facebookPage, facebookAuthorPage, instagramPage, youtubeChannelId, description } = website;

    	const seoProps: Seo = {
        entityMeta: this.getEntityMeta(),
        datePublished: data.date_created,
        lastUpdated: data.date_updated,
        breadcrumbs: this.getBreadcrumbs(data, params),
        metadescription: description,
        featuredImage: this.getFeaturedImage('', this.getTitle(data, params), description),
        ogImage: this.getOgImage('', this.getTitle(data, params)),
        ogLanguage,
        pageTitle: this.getTitle(data, params),
        siteTitle,
        url: `/services/codebase-cleanup`,
        facebookPage,
        facebookAuthorPage,
        instagramPage,
        youtubeChannelId,
        author,
        entity,
        siteLanguage,
        siteTitleAlt: description,
        siteUrl
    	};

    	return seoProps
  
    }

    protected getBreadcrumbs(data: any, params: RouteParams): Array<Breadcrumb> {
    	return [
    		{
    			name: 'Accueil',
    			slug: '/',
    		},
    		{
    			name: 'Mes services',
    			slug: '/services',
    		},
    		{
    			name: 'Nettoyage de code',
    			slug: '/services/codebase-cleanup',
    		},
    	];
    }

    protected getTitle(data: any, params: RouteParams): string {
    	return 'Nettoyage de code';
    }
  
}
