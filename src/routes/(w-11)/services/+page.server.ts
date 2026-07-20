import type { PageServerLoad } from './$types';
import ServicesPageSeo from '$lib/server/config/SEO/pages/ServicesPageSeo';

export const load: PageServerLoad = async ({ params }) => {

	const servicesPageSeo: ServicesPageSeo = new ServicesPageSeo();

	const services: Array<{title: string, content: string, link: string}> = [
		{
			title: "Développement d'une application web",
			content: "Vous n'avez pas encore de site pour votre commerce ? Vous souhaitez reprendre la main sur votre wordpress, wix, sitew ... pour avoir quelque chose de plus adapté à vos besoins ? Ou vous voulez tout simplement des bras en plus pour aider à la maintenance d'une application web existante ? Ça tombe bien c'est mon métier.",
			link: "/services/website-development"
		},
		{
			title: "Nettoyage de code",
			content: "Quand vous avez lancé votre application, il vous suffisait d'une journée pour ajouter une fonctionnalité et maintenant il vous faut deux semaines pour changer la couleur d'un bouton ? Vous mettez autant de temps à lire votre code que de temps à charger une page ? Je connais des techniques ancestrales pour anéantir ces problèmes.",
			link: "/services/codebase-cleanup"
		},
		{
			title: "Cours et mentoring",
			content: "Si je veux travailler avec des gens compétents dans un futur proche, je dois mettre la main à la pâte et transmettre ce que j'ai pu apprendre au fil des années. Transmettre et ne pas laisser mourir le savoir est important pour moi. C'est pour ces raisons que j'ai mis au point plusieurs syllabus de cours, allant des introductions à la programmation jusqu'aux bonnes pratiques, adaptables selon le niveau et les besoins des élèves.",
			link: "/services/courses-and-mentoring"
		},
	]
	
	return {
		seoProps: servicesPageSeo.getSeoProps({}, params),
		services
	};
};
