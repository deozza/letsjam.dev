import type { PageServerLoad } from './$types';
import CoursesAndMentoringPageSeo from '$lib/server/config/SEO/pages/CoursesAndMentoringPageSeo';

export const load: PageServerLoad = async ({ params }) => {

	const coursesAndMentoringPageSeo: CoursesAndMentoringPageSeo = new CoursesAndMentoringPageSeo();

	const courses: Array<{title: string, content: string}> = [
		{
			title: 'Introduction à la programmation',
			content: "Comprendre la syntaxe, la structure et les blocs principaux d'un programme avec PHP, Python, Javascript, ..."
		},
		{
			title: 'Environnement de développement',
			content: "Choisir et mettre en place ses outils en fonction des besoins pour développer de manière efficace et sereine."
		},
		{
			title: 'Introduction aux bases de données relationnelles',
			content: 'Stocker intelligemment ses données sur un serveur afin de les réutiliser depuis une application avec MySQL.'
		},
		{
			title: 'Modélisation des systèmes',
			content: "Prévoir le fonctionnement et l'organisation de son application, ce qui permet de faciliter son implémentation, sa documentation, sa compréhension, ..."
		},
		{
			title: 'Programmation avancée',
			content: 'Mettre en application la Programmation Orientée Objet pour créer son propre framework en PHP ou concevoir des applications avec Symfony.'
		},
		{
			title: 'Bonnes pratiques de développement',
			content: "Techniques à mettre en place pour faciliter la maintenance, l'extension des fonctionnalités et la performance d'une application."
		},
	];

	const mentoring: Array<{title: string, content: string}> = [
		{
			title: 'Aide ponctuelle',
			content: `Bloqué.e sur un problème d'implémentation, sur la compréhension d'un concept ou sur un bug un peu trop résistant, vous pensez qu'un regard extérieur pourrait vous faire avancer plus efficacement ? Je serais ravi de servir de <a target="_blank" class="anchor text-secondary-500" href="https://fr.wikipedia.org/wiki/M%C3%A9thode_du_canard_en_plastique">canard en plastique</a> pour 60 minutes.`
		},
		{
			title: 'Accompagnement',
			content: "Vous souhaitez monter en compétence sur une technologie parmi PHP, Symfony ou Sveltekit ou une technique comme le clean code ou le TDD ? On se programme des rendez-vous réguliers pour apprendre, s'exercer et progresser."
		},
	];

	
	return {
		seoProps: coursesAndMentoringPageSeo.getSeoProps({}, params),
		courses,
		mentoring
	};
};
