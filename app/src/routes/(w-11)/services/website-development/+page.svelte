<script lang="ts">
	import type { PageServerData } from './$types';
	import SEO from '$lib/SEO/index.svelte';
	import Breadcrumbs from '$lib/ui/Breadcrumbs.svelte';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	import { slide } from 'svelte/transition';
	import Icon from "@iconify/svelte";
	
	interface Props {
		data: PageServerData;
	}

	let { data }: Props = $props();
	
</script>

<SEO seo={data.seoProps} />

<Breadcrumbs breadcrumbs={data.seoProps.breadcrumbs} />

<h1 class="h1 font-black my-12">{data.seoProps.pageTitle}</h1>

<section class="w-full flex flex-col items-start justify-start space-y-12">
	<h2 class="h2">Deux formules au choix :</h2>
	
	<div class="grid md:grid-cols-2 gap-6 w-full">
		<div class="card preset-filled-surface-500 rounded-none border-black border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)] p-6">
			<h3 class="h4 pb-4 text-primary-500 text-center">Vous n'avez pas encore de site</h3>
			<p class="text-justify">Vous souhaitez vous faire connaître de plus de personnes ? Ou vous voulez permettre à vos clients habituels de vous retrouver plus facilement ? Avoir un site vitrine sera votre carte de visite sur internet.</p>
		</div>
		<div class="card preset-filled-surface-500 rounded-none border-black border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)] p-6">
			<h3 class="h4 pb-4 text-primary-500 text-center">Reprise d'un site existant</h3>
			<p class="text-justify">Vous êtes déjà propriétaire d'un site créé à partir d'un outil tierce (wordpress, sitew, wix, squarespace, ...) et vous souhaitez passer à un site fait main pour répondre exactement à vos besoins et vos exigences. Toutes les pages, interfaces et fonctionnalités seront répliquées. Vous ne repartirez pas de zéro.</p>
		</div>
	</div>
</section>

<section class="w-full flex flex-col items-start justify-start space-y-12">
	<h2 class="h2">Comment je travaille :</h2>

	<div class="flex flex-col items-start jutify-center w-full space-y-6">
		<div class="flex flex-col md:flex-row flex-wrap items-start md:items-center justify-start space-x-6">
			<p class="h1 text-secondary-500">01</p>
			<p class="h3 text-black">Appel</p>
		</div>
		<p>Un appel de 60 minutes pour prendre connaissance. Afin de mieux comprendre votre besoin, vos problèmes, votre activité. Il est encore trop tôt pour commencer à travailler voir vous proposer une solution, c'est risquer de rentrer dans le mur. C'est pour cela que cet appel n'est <b>pas facturé</b>. Cependant, j'aurais toutes les informations pour vous dire si je peux faire quelque chose pour vous ou si je connais quelqu'un pour vous aider.</p>
		<hr class="hr">
	</div>
	<div class="flex flex-col items-start jutify-center w-full space-y-6">
		<div class="flex flex-col md:flex-row flex-wrap items-start md:items-center justify-start space-x-6">
			<p class="h1 text-secondary-500">02</p>
			<p class="h3 text-black">Audit</p>
		</div>
		<p>Une analyse de vos concurrents pour définir comment vous différencier. Quels mots-clefs, quels designs, placement dans la recherche google et nombres de visiteurs par jours. Si vous souhaitez la reprise de votre site, la même analyse sera faite sur celui-ci. <b>Vous recevrez un document récapitulatif avec les solutions que je vous propose.</b></p>
		<hr class="hr">
	</div>
	<div class="flex flex-col items-start jutify-center w-full space-y-6">
		<div class="flex flex-col md:flex-row flex-wrap items-start md:items-center justify-start space-x-6">
			<p class="h1 text-secondary-500">03</p>
			<p class="h3 text-black">Accord sur le plan et le tarif</p>
		</div>
		<p>On se met d'accord sur la solution à appliquer selon vos envies et votre budget. Cela inclus ce qui doit être développé, de quelle manière et quels contrôles qualités pour valider le travail. Pas de tarification à l'heure ou à la journée : <b>un prix fixe</b> pour une application faite selon ces termes, avec un délai de livraison décidé en amont. Si le projet est plus complexe que prévu, vous serez mis au courant immédiatement et pas à la réception de la facture. Si vous avez de nouvelles demandes en cours de développement, elles seront analysées pour déterminer si elles pourront être incluses ou non.</p>
		<hr class="hr">
	</div>
	<div class="flex flex-col items-start jutify-center w-full space-y-6">
		<div class="flex flex-col md:flex-row flex-wrap items-start md:items-center justify-start space-x-6">
			<p class="h1 text-secondary-500">04</p>
			<p class="h3 text-black">Développement</p>
		</div>
		<p>Une organisation éprouvée pour développer votre site web en <b>moins de 2 semaines</b>. Chaque lundi matin je vous mets au courant des travaux prévus pour la semaine, et chaque mercredi et vendredi midi vous saurez quel est le degré d'avancement de ces travaux. <b>Une démo vous sera fournie 24/24 et 7J/7</b> pour que vous puissez vous rendre compte de ces avancements et les valider au fur et à mesure.</p>
		<hr class="hr">
	</div>
	<div class="flex flex-col items-start jutify-center w-full space-y-6">
		<div class="flex flex-col md:flex-row flex-wrap items-start md:items-center justify-start space-x-6">
			<p class="h1 text-secondary-500">05</p>
			<p class="h3 text-black">Livraison</p>
		</div>

		<div class="grid md:grid-cols-3 gap-6 w-full">
			<div class="flex flex-col items-center justify-center card preset-filled-surface-500 rounded-none border-black border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)] p-6">
				<p class="h4 pb-4 text-primary-500 text-center">Votre site web et son code</p>
				<Icon icon="mdi:computer" class="text-6xl" />
			</div>
			<div class="flex flex-col items-center justify-center card preset-filled-surface-500 rounded-none border-black border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)] p-6">
				<p class="h4 pb-4 text-primary-500 text-center">Une interface d'édition de contenu</p>
				<Icon icon="mdi:note-edit-outline" class="text-6xl" />
			</div>
			<div class="flex flex-col items-center justify-center card preset-filled-surface-500 rounded-none border-black border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)] p-6">
				<p class="h4 pb-4 text-primary-500 text-center">Une interface des statistiques de visites</p>
				<Icon icon="mdi:graph-line" class="text-6xl" />
			</div>
			<div class="flex flex-col items-center justify-center card preset-filled-surface-500 rounded-none border-black border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)] p-6">
				<p class="h4 pb-4 text-primary-500 text-center">L'hébergement sur un serveur</p>
				<Icon icon="mdi:server-outline" class="text-6xl" />
			</div>
			<div class="flex flex-col items-center justify-center card preset-filled-surface-500 rounded-none border-black border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)] p-6">
				<p class="h4 pb-4 text-primary-500 text-center">Formation d'utilisation</p>
				<Icon icon="mdi:teach-poll" class="text-6xl" />
			</div>
			<div class="flex flex-col items-center justify-center card preset-filled-surface-500 rounded-none border-black border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)] p-6">
				<p class="h4 pb-4 text-primary-500 text-center">Documentation</p>
				<Icon icon="mdi:file-document-outline" class="text-6xl" />
			</div>
		</div>
		
			<div class="flex flex-col items-center justify-center card preset-filled-surface-500 rounded-none border-black border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)] p-6">
				<p class="text-2xl text-center text-slate-200">Le code, le serveur et le nom de domaine à votre nom. Pas d'attaches, pas de frais supplémentaires, pas d'abonnements. <b>C'est votre site</b>. Un support gratuit de 30 jours est tout de même compris.</p>
			</div>
	</div>
</section>

<section class="w-full flex flex-col items-start justify-start space-y-12">
	<h2 class="h2">Mes engagements</h2>

	<Accordion>
		{#each data.commitments as item, i (item)}
			{#if i !== 0}
				<hr class="hr" />
			{/if}
			<Accordion.Item value={item.id}>
				<h3>
					<Accordion.ItemTrigger class="h3 font-bold flex items-center justify-between gap-2">
						{item.title}
						<Accordion.ItemIndicator class="group">
							<Icon icon="mdi:chevron-down" class="h-5 w-5 transition group-data-[state=open]:rotate-180" />
						</Accordion.ItemIndicator>
					</Accordion.ItemTrigger>
				</h3>
				<Accordion.ItemContent>
					{#snippet element(attributes)}
						{#if !attributes.hidden}
							<div {...attributes} transition:slide={{ duration: 150 }}>
								<p class="text-justify">
									{item.description}
								</p>
							</div>
						{/if}
					{/snippet}
				</Accordion.ItemContent>
			</Accordion.Item>
		{/each}
	</Accordion>

</section>

<section class="flex flex-col items-center justify-center card preset-filled-primary-500 w-full p-6 my-6 space-y-6 border-black rounded-none border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)]">
	<p class="h1 text-center text-black">Vous voulez travailler avec moi ?</p>
	<p></p>
	<div class="flex flex-col md:flex-row flex-wrap items-center justify-center space-y-4 md:space-y-0 md:space-x-6 ">
			<a href="/contact?object=website-from-scratch" class="btn md:btn-xl preset-filled-surface-500 text-slate-200 border-black rounded-none border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)] transform transition duration-300 hover:scale-98 hover:shadow-[2px_2px_0px_1px_rgba(0,_0,_0,_1)]">Demander un devis</a>
			<a href="/contact?object=website-audit" class="btn md:btn-xl preset-filled-surface-950-50 border-black rounded-none border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)] transform transition duration-300 hover:scale-98 hover:shadow-[2px_2px_0px_1px_rgba(0,_0,_0,_1)]">Commencer avec un audit</a>
	</div>
</section>

