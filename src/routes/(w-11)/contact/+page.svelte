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

<h1 class="h1 font-black my-12">Discutons ensemble</h1>

<div class="flex flex-col-reverse md:flex-row flex-wrap items-start justify-between">
	
	<section class="w-full md:w-5/12">
		<form class="card rounded-none bg-surface-500 p-4 space-y-6 shadow-[2px_2px_0px_1px_rgba(219,_126,_59,_0.5)]">
			<fieldset class="fieldset space-y-4 border border-primary-500">
				<legend class="legend text-lg">Informations</legend>
				<label class="label">
					<span class="label-text text-base">Nom</span>
					<input class="input field-xl" name="email" type="email" placeholder="you@example.com" required/>
				</label>
				<label class="label">
					<span class="label-text text-base">Prénom</span>
					<input class="input field-xl" name="firstname" type="text" placeholder="you@example.com" required/>
				</label>
				<label class="label">
					<span class="label-text text-base">Email</span>
					<input class="input field-xl" name="lastname" type="text" placeholder="you@example.com" required/>
				</label>
			</fieldset>
			<fieldset class="fieldset space-y-4 border border-primary-500">
				<legend class="legend text-lg">Message</legend>
				<label class="label">
					<span class="label-text text-base">Contact pour un...</span>
					<select class="select field-xl">
						<option disabled selected>Selectionner</option>
						<option value="">Site vitrine</option>
						<option value="la">Nettoyage post-IA</option>
						<option value="chi">Cours</option>
					</select>
				</label>
				<label class="label">
					<span class="label-text text-base">Message</span>
					<textarea class="textarea" name="message" rows="10" placeholder="Delivery instructions..." required></textarea>
				</label>
			</fieldset>
			<footer class="flex justify-end">
				<button type="submit" class="btn btn-xl preset-filled-brand shadow-[2px_2px_0px_1px_rgba(0,_0,_0,_0.5)]">Envoyer</button>
			</footer>
		</form>
	</section>

	<section class="h-full w-full md:w-1/2 flex flex-col items-center justify-around space-y-6">
		<p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id dui sit amet metus imperdiet interdum sit amet ut massa. Nam quis lacinia risus, non rutrum sem. Duis eget viverra nisl, ut finibus nibh. Etiam vulputate, mauris ut iaculis tincidunt, quam massa viverra ex, id posuere urna magna id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius arcu sit amet lacus tincidunt, non vehicula ex rutrum. In eget elit tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque aliquet nisl ac sem facilisis vehicula. 		</p>

		<div class="card preset-outlined-surface-500 shadow-[2px_2px_0px_1px_rgba(219,_126,_59,_0.5)] w-full p-6">
			<h2 class="h4 pb-4">Lorem ipsum</h2>
			<p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend lobortis dolor semper mollis. Etiam et nibh vitae libero tristique malesuada id ac risus. Phasellus aliquam lorem id dolor condimentum.</p>
		</div>
		
		<div class="card preset-outlined-surface-500 shadow-[2px_2px_0px_1px_rgba(219,_126,_59,_0.5)] w-full p-6">
			<h2 class="h4 pb-4">Lorem ipsum</h2>
			<p class="text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend lobortis dolor semper mollis. Etiam et nibh vitae libero tristique malesuada id ac risus. Phasellus aliquam lorem id dolor condimentum. </p>
		</div>
		
		<div class="card preset-outlined-surface-500 shadow-[2px_2px_0px_1px_rgba(219,_126,_59,_0.5)] w-full p-6">
			<h2 class="h4 pb-4">Lorem ipsum</h2>
			<p class="text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend lobortis dolor semper mollis. Etiam et nibh vitae libero tristique malesuada id ac risus. Phasellus aliquam lorem id dolor condimentum. </p>
		</div>
	</section>

</div>
