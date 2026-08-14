import website from "$lib/server/config/website";
import type { Breadcrumb, EntityMeta, FeaturedImage, OgImage, Seo } from "$lib/server/config/SEO/types";
import type { Pages } from "$lib/server/directus";

export default abstract class AbstractSeoForPage {

  protected page: Pages;

  public constructor(page: Pages) {
    this.page = page;
  }
  
  public abstract getSeoProps(): Seo;
  
  protected getFeaturedImage(link: string | null, title: string, alt: string): FeaturedImage {
    let rawImageLink: string = '';

    if(link !== null) {
    	rawImageLink = '';
    }
	
  	return {
  		url: rawImageLink,
  		alt: alt,
  		width: 672,
  		height: 448,
  		caption: title
  	};
  }

  protected getOgImage(link: string | null, alt: string): OgImage  {
    let rawImageLink: string = '';

    if(link !== null) {
    	rawImageLink = '';
    }
    
  	return {
  		url: rawImageLink,
  		alt: alt,
  	};
  }

  protected getEntityMeta(): EntityMeta {
  	const { author, siteUrl } = website;

  	return {
  		url: `${siteUrl}/`,
  		faviconWidth: 512,
  		faviconHeight: 512,
  		caption: author,
  	};
  }
  
  protected getBreadcrumbs(): Array<Breadcrumb> {
      const breadcrumbs: Array<Breadcrumb> = [];
      let currentPage: Pages | null = this.page;
      while(currentPage !== null) {
          breadcrumbs.unshift({name: currentPage.title, slug: currentPage.uri});
          currentPage = currentPage.parent;
      }
      
      return breadcrumbs;
  }

  protected getTitle(): string {
  	return this.page.title;	
  }
 
}
