<script lang="ts">
	import '../layout.css';
	import DesktopNavbar from '$lib/ui/DesktopNavbar.svelte';
	import MobileNavbar from '$lib/ui/MobileNavbar.svelte';
	import Footer from '$lib/ui/Footer.svelte';
	
	let { children, data } = $props();
	
</script>

<DesktopNavbar links={data.links} currentUri={data.currentUri} />

<main class="flex flex-col items-center justify-between my-6">
	<div class="w-11/12">
		{@render children()}
	</div>
</main>

<Footer links={data.links} />
<MobileNavbar links={data.links} currentUri={data.currentUri} />
