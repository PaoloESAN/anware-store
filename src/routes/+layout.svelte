<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.png";
	import { ModeWatcher } from "mode-watcher";
	let { children } = $props();
</script>

<ModeWatcher />
<svelte:head>
	<title>Anware Store</title>
	<meta
		name="description"
		content="Tu tienda de confianza para productos de alta calidad."
	/>
	<meta property="og:title" content="Anware Store" />
	<meta property="og:type" content="website" />
	<link rel="icon" href={favicon} />
</svelte:head>
{@render children()}
