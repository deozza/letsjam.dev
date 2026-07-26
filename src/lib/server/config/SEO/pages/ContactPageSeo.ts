import website from "$lib/server/config/website";
import AbstractSeoForPage from "$lib/server/config/SEO/pages/AbstractSeoForPage";
import type { Breadcrumb, Seo } from "$lib/server/config/SEO/types";

export default class ContactPageSeo extends AbstractSeoForPage {
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
        url: `/contact`,
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
    			name: 'Me contacter',
    			slug: '/contact',
    		},
    	];
    }

    protected getTitle(): string {
    	return 'Me contacter';	
    }
  
}
