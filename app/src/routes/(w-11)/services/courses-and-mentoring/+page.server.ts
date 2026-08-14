import type { PageServerLoad } from './$types';
import CoursesAndMentoringPageSeo from '$lib/server/config/SEO/pages/CoursesAndMentoringPageSeo';
import { PRIVATE_DIRECTUS_URL } from '$env/static/private';
import getDirectusInstance from '$lib/server/directus';
import { readItems } from '@directus/sdk';
import { error } from '@sveltejs/kit';
import type { Pages } from '$lib/server/modeles/Pages';
import { pageFields } from '$lib/server/repositories/Pages';

export const load: PageServerLoad = async ({ fetch, url }) => {

	const directus = getDirectusInstance(fetch, PRIVATE_DIRECTUS_URL);
	const page: Pages = await directus
		.request(
			readItems('pages', {
				fields: pageFields,
				filter: {
					uri: {
						_eq: url.pathname
					}
				},
				limit: 1
			})
		)
		.then((pages: Array<Pages>) => {
			if(pages.length === 1) {
				return pages[0];
			} else {
				error(404, {
					message: 'Not found'
				});
			}
		})
		.catch((e) => {
			console.log(e)
			error(404, {
				message: e.message
			});
		});
	const coursesAndMentoringPageSeo: CoursesAndMentoringPageSeo = new CoursesAndMentoringPageSeo(page);

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
			content: 'Stocker intelligemment ses données sur un serveur MySQL afin de les réutiliser depuis une application cliente.'
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

	const courseSubtexts: Array<string> = [
		`Au fil de mes années de pratique, j'ai pu mettre au point plusieurs syllabus permettant de se former au métier du développement web fullstack. Ces cours ont été construits pour s'adresser à des élèves de tous niveaux, de la première année de bachelor à la deuxième année de mastère, et sont adaptables en fonction de vos besoins et de vos programmes. Ils sont clefs en main : savoirs et compétences prérequis, objectifs pédagogiques, détails séance par séance, exercices d'entrainement, contrôles continus, partiels, ...`,
		`Pour favoriser une pratique continue ainsi qu'une montée rapide en compétences, je me base sur une pédagogie qui allie études de cas, mises en situation réelle. La théorie et les bases techniques occupent une place importante dans mes interventions, mais elle accompagne toujours du factuel.`,
		`Mes interventions sont pensées comme des conférences intéractives. Ce ne sont pas seulement des enchaînements de savoirs théoriques et d'applications techniques, mais, avant tout, des échanges afin de stimuler l'intérêt des élèves pour le métier, les encourager à mettre en place une veille technologique et à affuter leur esprit critique.`,
	];

	
	return {
		seoProps: coursesAndMentoringPageSeo.getSeoProps(),
		courses,
		courseSubtexts,
		mentoring,
		page
	};
};
