<script lang='ts'>
	import { error } from "@sveltejs/kit";
	import RestaurantList from "../components/RestaurantList.svelte";
	import type {PageData} from './$types';

	export let data : PageData;
	let restaurantes = data.data;

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<RestaurantList restaurantes={restaurantes}/> 
</div>

<style lang="postcss">
</style>
