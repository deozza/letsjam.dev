import {
  PUBLIC_SITE_URL,
} from '$env/static/public';

import {
  PRIVATE_CONTACT_EMAIL,
} from '$env/static/private';

const facebookPageName: string = '';
const facebookAuthorPageName: string = '';

export type Website = {
	author: string,
	entity: string,
	ogLanguage: string,
	siteLanguage: string,
	siteTitle: string,
	siteShortTitle: string,
	description: string,
	siteUrl: string,
	backgroundColor: string,
	themeColor: string,
	contactEmail: string,
	facebookAuthorPage: string,
	facebookAuthorPageName: string,
	facebookPage: string,
	facebookPageName: string,
	youtubeChannelId: string,
	instagramPage: string
}

const website: Website = {
	author: 'Edenn Touitou',
	entity: 'Letsjam',
	ogLanguage: 'fr_FR',
	siteLanguage: 'fr-FR',
	siteTitle: 'Letsjam | Développeur web',
	siteShortTitle: 'Letsjam',
	description: '',
	siteUrl: PUBLIC_SITE_URL,
	backgroundColor: '#000',
	themeColor: '#db7e3b',
	contactEmail: PRIVATE_CONTACT_EMAIL,
	facebookAuthorPage: `https://www.facebook.com/${facebookAuthorPageName}`,
	facebookAuthorPageName,
	facebookPage: `https://www.facebook.com/${facebookPageName}`,
	facebookPageName,
	youtubeChannelId: '',
	instagramPage: ''
	
};

export { website as default };
