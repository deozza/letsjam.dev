import website from "$lib/server/config/website";
// import { getOptimizedImageLink } from "$lib/utils";
import type { Breadcrumb, EntityMeta, FeaturedImage, OgImage, Seo } from "$lib/server/config/SEO/types";

export default abstract class AbstractSeoForPage<DataT, RouteParamsT> {
  
  public abstract getSeoProps(data: DataT, params: RouteParamsT): Seo;
  protected abstract getBreadcrumbs(data: DataT, params: RouteParamsT): Array<Breadcrumb>;
  protected abstract getTitle(data: DataT, params: RouteParamsT): string;
  
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
 
}
