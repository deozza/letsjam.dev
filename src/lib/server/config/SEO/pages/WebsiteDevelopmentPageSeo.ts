import website from "$lib/server/config/website";
import AbstractSeoForPage from "$lib/server/config/SEO/pages/AbstractSeoForPage";
import type { Breadcrumb, Seo } from "$lib/server/config/SEO/types";

export default class WebsiteDevelopmentPageSeo extends AbstractSeoForPage {
    public getSeoProps(): Seo {
    	const { author, entity, siteUrl, ogLanguage, siteTitle, siteLanguage, facebookPage, facebookAuthorPage, instagramPage, youtubeChannelId, description } = website;

    	const seoProps: Seo = {
        entityMeta: this.getEntityMeta(),
        datePublished: '',
        lastUpdated: '',
        breadcrumbs: this.getBreadcrumbs(),
        metadescription: description,
        featuredImage: this.getFeaturedImage('', this.getTitle(), description),
        ogImage: this.getOgImage('', this.getTitle()),
        ogLanguage,
        pageTitle: this.getTitle(),
        siteTitle,
        url: `/services/website-development`,
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

    protected getBreadcrumbs(): Array<Breadcrumb> {
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
    			name: "Dévelopement d'application web",
    			slug: '/services/website-development',
    		},
    	];
    }

    protected getTitle(): string {
    	return "Dévelopement d'application web";
    }
  
}
