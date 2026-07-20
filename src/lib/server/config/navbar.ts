import logo from '$lib/assets/logo.jpg'

export const links: Array<{
  href: string,
  content: string,
  target: '_self' | '_blank',
  icon?: string | undefined,
  img?: string | undefined
}> = [
	{href: '/services', content: 'Services', target: '_self', icon: 'mdi:list-box-outlined'},
	{href: '/projects', content: 'Réalisations', target: '_self', icon: 'mdi:about'},
	{href: '/', content: 'Letsjam logo', target: '_self', img: logo},
	{href: '/about', content: 'À propos', target: '_self', icon: 'mdi:about-circle-outlined'},
	{href: '/contact', content: 'Contact', target: '_self', icon: 'mdi:dmail-outlined'},
];
