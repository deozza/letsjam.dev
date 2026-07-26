import type { PageServerLoad } from './$types';
import WebsiteDevelopmentPageSeo from '$lib/server/config/SEO/pages/WebsiteDevelopmentPageSeo';

export const load: PageServerLoad = async ({ params }) => {

	const websiteDevelopmentPageSeo: WebsiteDevelopmentPageSeo = new WebsiteDevelopmentPageSeo();

	const commitments: Array<{id: string, title: string, description: string}> = [
		{
			id: '1',
			title: "Un site simple et léger, donc securisé et performant",
			description: "Les sites d'aujourd'hui embarquent une quantité d'animations, de pop-ups et de transitions qui impacte la navigation par les utilisateurs. Temps de chargement trop longs, contenus qui apparaissent et disparaissent et bien d'autres soucis qui frustrent à l'utilisation. les sites que je fournis misent sur l'efficacité de la simplicité : des temps de chargement de moins de 2 secondes, une haute accessibilité et une structure claire. Et qui dit simplicité, dit moins de vecteurs d'attaque par de potentiels pirates."
		},
		{
			id: '2',
			title: "Favoriser des outils européens",
			description: "Dans un effort de respect des données de vos utilisateurs et de leur vie privée, ainsi qu'une volonté de rester le plus indépendant possible, l'utilisation de services des géants de la tech (Google, Amazon, Facebook, Microsoft, ...) sera nulle. Des alternatives européennes seront utilisées à la place. Cela se ressentira également sur votre facture !"
		},
		{
			id: '3',
			title: "0% d'IA",
			description: "Je ne peux tenir mes deux précédents engagements si j'utilisais de l'IA dans mes processus. La technologie a un coût environnemental, économique, sociétal tel que je ne peux me permettre de l'inclure dans mes produits. Sans parler de son efficacité plus que douteuse et des risques de sécurité qu'elle introduit."
		}
	];
	
	return {
		seoProps: websiteDevelopmentPageSeo.getSeoProps({}, params),
		commitments
	};
};
