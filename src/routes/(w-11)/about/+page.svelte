<script lang="ts">
	import type { PageServerData } from './$types';
	import SEO from '$lib/SEO/index.svelte';
	import Breadcrumbs from '$lib/ui/Breadcrumbs.svelte';

	interface Props {
		data: PageServerData;
	}

	let { data }: Props = $props();
	
</script>

<SEO seo={data.seoProps} />

<Breadcrumbs breadcrumbs={data.seoProps.breadcrumbs} />

<h1 class="h1 font-black my-12">À propos</h1>


<section class="flex flex-col justify-center space-y-6 my-6">
	<h2 id="qui-je-suis" class="h2">Qui je suis ?</h2>
	<p class="text-justify text-lg">Je m'appelle Edenn Touitou. Joueur de jeux de combats, guitariste amateur, aquariophile mais ce qui doit le plus vous intéresser, c'est que je suis développeur web fullstack. 3 mots compliqués pour simplement signifier que je suis capable de programmer un site web, de A à Z. S'occuper de l'interface, de la gestion des données, de l'hébergement, de l'optimisation des temps de chargement et du référencement, c'est dans mes cordes.</p>

	<p class="text-justify text-lg">Je me suis spécialisé dans les applications web en <strong>PHP</strong>, avec <a class="anchor text-secondary-500" target="_blank" href="https://symfony.com/?ref=letsjam.dev" rel="noreferrer">Symfony</a>. Mais j'ai pu toucher à du <a class="anchor text-secondary-500" target="_blank" href="https://laravel.com/?ref=letsjam.dev" rel="noreferrer">Laravel</a> (<em>donc un wrapper de Symfony, soyons honnête</em>) et même eu la chance et l'opportunité incroyable de travailler en Zend 1. <em>Oui ce truc qui date de 2014, et</em> <a class="anchor text-secondary-500" target="_blank" href="https://github.com/zendframework/zf1?ref=letsjam.dev" rel="noreferrer"><em>dont la maintenance s'est arrêtée en 2018</em></a>.</p>

	<p class="text-justify text-lg">Personnellement, je travaille avec <a class="anchor text-secondary-500" target="_blank"  href="https://svelte.dev/?ref=letsjam.dev" rel="noreferrer">Svelte</a> dès que j'en ai l'opportunité. C'est l'outil front le plus intuitif avec lequel j'ai pu travailler, et me permet de créer des sites performants et légers comme j'en ai envie. Tous les ans je refais le <a class="anchor text-secondary-500" target="_blank"  href="https://go.dev/tour/list?ref=letsjam.dev" rel="noreferrer">Tour of Go</a>, en me disant que cette fois-ci, c'est la bonne. Et il faudrait aussi que je me mette à <a class="anchor text-secondary-500" target="_blank"  href="https://elixir-lang.org/?ref=letsjam.dev" rel="noreferrer">Elixir</a>. <em>Je dois comprendre ce que des gens comme Brian Marick trouve à ce langage</em>.</p>

	<p class="text-justify text-lg">J'ai pu travailler dans quelques entreprises de tailles diverses et de marchés variés. De la startup de KYC à la petite agence immobilière, en passant par la 3ème banque français, 6ème européenne et 19ème mondiale (<a  class="anchor text-secondary-500" target="_blank" href="https://fr.wikipedia.org/wiki/Soci%C3%A9t%C3%A9_g%C3%A9n%C3%A9rale?ref=letsjam.dev" rel="noreferrer">d'après Wikipédia en tout cas</a>) et par les leaders de l'externalisation de la gestion de l'expérience client et des processus métier. <em>Quoi que ça veuille dire</em>.</p>

	<p class="text-justify text-lg">Je suis aujourd'hui indépendant et je passe la majorité de mon temps à intervenir auprès d'étudiant.es dans des écoles du numérique. Je mets également mes compétences au service de commerçants et d'artisans dans l'univers de la musique.</p>
</section>

<section class="flex flex-col justify-center space-y-6 my-6">
	<h2 id="lets-jam" class="h2">Let's jam ?</h2>

	<p class="text-justify text-lg">C'est le nom que j'ai choisi pour mon entreprise freelance.</p>

	<p class="text-justify text-lg">Un jam, ou un <code class="code preset-filled-primary-500">boeuf</code> en français, c'est le nom que l'on donne aux improvisations musicales. Lorsque plusieurs musicien.nes, qui ne se connaissent pas forcément, se trouvent, lancent des notes, trouvent des idées, créent un univers sonore cohérent et s'amusent ensemble.</p>

	<p class="text-justify text-lg">C'est cette idée que je veux reproduire avec les personnes avec qui je travaille. Que l'on puisse se retrouver autours d'un objectif commun, et qu'on l'atteigne en s'appuyant sur les expériences, maîtrises et compétences de tout le monde.</p>

	
	<div class="card preset-outlined-surface-500 border-black rounded-none border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)] w-full p-6 my-6">
		<p class="text-center text-xl">
			Qu'on sache être efficaces pour travailler ensemble sans que ça soit une corvée pour personne, pour créer quelque chose d'utile avec nos signatures personnelles distinctives.
		</p>
	</div>
</section>

<section class="flex flex-col items-center justify-center card preset-filled-primary-400-600 w-full p-6 my-6 space-y-6 border-black rounded-none border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)]">
	<p class="h1 text-center text-black">Vous voulez travailler avec moi ?</p>
	<p></p>
	<div class="flex flex-col md:flex-row flex-wrap items-center justify-center space-y-4 md:space-y-0 md:space-x-6 ">
			<a href="/services" class="btn md:btn-xl preset-filled-surface-600-400 text-slate-200 border-black rounded-none border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)]">Ce que je vous propose</a>
			<a href="/contact" class="btn md:btn-xl preset-filled-surface-900-100 text-black border-black rounded-none border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)]">Prendre contact</a>
	</div>
</section>
