<script lang='ts'>
	import { error } from "@sveltejs/kit";
	import RestaurantList from "../components/RestaurantList.svelte";

	/** @type {import('./$types').PageData} */    
	export let data;
	let restaurantes = data.data;

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<RestaurantList restaurantes={restaurantes}/> 
</div>

<style lang="postcss">
</style>
