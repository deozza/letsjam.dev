<script lang="ts">
	import type { PageServerData } from './$types';
	import { sendContact } from './contact.remote';
	import SEO from '$lib/SEO/index.svelte';
	import Breadcrumbs from '$lib/ui/Breadcrumbs.svelte';
	import Section from '$lib/ui/PageBuilder/Blocks/Section.svelte';

	interface Props {
		data: PageServerData;
	}

	let { data }: Props = $props();
	let formState = $state<'idle'|'loading'|'success'|'error'>('idle');

</script>

<SEO seo={data.seoProps} />

<Breadcrumbs breadcrumbs={data.seoProps.breadcrumbs} />

{#each data.page.sections as section}
	<Section {section} />
{/each}

<div class="flex flex-col-reverse md:flex-row flex-wrap items-start justify-between">
	
	<section class="w-full md:w-5/12 my-12 md:my-0">
		<form class="card rounded-none bg-primary-500 p-4 space-y-6 border-black rounded-none border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)]"
			{...sendContact.enhance(async (form) => {
				try {
					formState = 'loading';
					const isSubmitted = await form.submit();
					if(isSubmitted === false) {
						formState = 'error';
						return;
					}

					if(form.result?.success === false) {
						formState = 'error';
						return;
					}

					formState = 'success';
					form.element.reset();

				} catch (error) {
					formState = 'error';
				}
			})}
		>
			<fieldset class="fieldset space-y-4 border border-surface-500">
				<legend class="legend text-lg">Informations de contact</legend>
				<label class="label">
					<span class="label-text text-base">Nom</span>
					<input class="input field-xl text-slate-200" name="lastname" type="text" required/>
				</label>
				<label class="label">
					<span class="label-text text-base">Prénom</span>
					<input class="input field-xl text-slate-200" name="firstname" type="text" required/>
				</label>
				<label class="label">
					<span class="label-text text-base">Email</span>
					<input class="input field-xl text-slate-200" name="email" type="email" required/>
				</label>
			</fieldset>
			<fieldset class="fieldset space-y-4 border border-surface-500">
				<legend class="legend text-lg">Message</legend>
				<label class="label">
					<span class="label-text text-base">Contact pour...</span>
					<select class="select field-xl text-slate-200" name="object">
						<option disabled selected>Selectionner</option>
						<optgroup label="Site vitrine">
							<option value="website-audit" selected={data.object === 'website-audit'}>Un audit de votre site</option>
							<option value="website-redevelop" selected={data.object === 'website-redevelop'}>La reprise de votre site</option>
							<option value="website-from-scratch" selected={data.object === 'website-from-scratch'}>La création de votre site</option>
						</optgroup>
						<optgroup label="Cours et mentoring">
							<option value="courses" selected={data.object === 'courses'}>Un cours</option>
							<option value="mentoring" selected={data.object === 'mentoring'}>Du mentoring</option>
						</optgroup>
					</select>
				</label>
				<label class="label">
					<span class="label-text text-base">Contenu</span>
					<textarea class="textarea field-xl text-slate-200" name="message" rows="10" required></textarea>
				</label>
				<label class="label hidden">
					<span class="label-text text-base">Envoyer le message</span>
					<input name="send" type="checkbox" />
				</label>
			</fieldset>
			<footer class="flex justify-end">
				{#if formState === 'idle'}
					<button type="submit" class="btn btn-xl text-slate-200 preset-filled-surface-500 border-black rounded-none border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)] transform transition duration-300 hover:cursor-pointer hover:scale-98 hover:shadow-[2px_2px_0px_1px_rgba(0,_0,_0,_1)]">Envoyer</button>
				{:else}
					<button type="submit" class="btn btn-xl text-slate-200 preset-filled-surface-500 border-black rounded-none border-2 scale-98 shadow-[2px_2px_0px_1px_rgba(0,_0,_0,_1)]" disabled>Envoyer</button>
				{/if}
			</footer>
			{#if formState === 'success'}
				<p class="p-4 bg-success-500 border-2">Votre message a été envoyé. J'y répondrais au plus vite</p>
			{:else if formState === 'error'}
				<p class="p-4 bg-error-500 border-2">Une erreur est survenue, veuillez réessayer plus tard.</p>
			{/if}
		</form>
	</section>

	<section class="w-full md:w-1/2 grid grid-flow-row auto-rows-max gap-6">
		<div class="card preset-outlined-surface-500 border-black rounded-none border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)] w-full p-6">
			<h2 class="h4 pb-4 text-secondary-500">[01] Envoi d'un message</h2>
			<p class="text-justify">Vous avez un projet sur lequel vous aimeriez que j'intervienne, des questions sur un cours ou vous voulez simplement discuter ? Remplissez rapidement le formulaire pour prendre contact.</p>
		</div>
		
		<div class="card preset-outlined-surface-500 border-black rounded-none border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)] w-full p-6">
			<h2 class="h4 pb-4 text-secondary-500">[02] Réponse rapide</h2>
			<p class="text-justify">Je répondrais d'ici un jour ouvré maximum. Vous saurez immédiatement et clairement si je suis en capacité de vous aider. Le cas échéant, j'essaierais au mieux de vous guider vers des personnes qui le peuvent.</p>
		</div>
		
		<div class="card preset-outlined-surface-500 border-black rounded-none border-2 shadow-[8px_8px_0px_2px_rgba(0,_0,_0,_1)] w-full p-6">
			<h2 class="h4 pb-4 text-secondary-500">[03] La suite ?</h2>
			<p class="text-justify">Chaque début d'intervention commence par un appel de 60 minutes, non facturé, pour prendre connaissance de vous et de votre projet. Je suis là pour vous écouter, pas vous vendre un produit.</p>
		</div>
	</section>

</div>
