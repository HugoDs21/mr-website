<script lang="ts">
	import { Accordion, AccordionItem, TabGroup, Tab } from '@skeletonlabs/skeleton';
import type {PageData} from './$types';

	export let data : PageData;

	console.log(data);

	let tabSet2 : number = 0;
	let tabSet3 : number = 0;
	let tabSet4 : number = 0;
	let tabSet5 : number = 0;
	let tabSet6 : number = 0;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center items-center w-full">
		<strong>{data.name}</strong>
		<Accordion>
			<AccordionItem>
				<svelte:fragment slot="lead">2️⃣</svelte:fragment>
				<svelte:fragment slot="summary">Segunda Feira</svelte:fragment>
				<svelte:fragment slot="content">
					<TabGroup>
						<Tab bind:group={tabSet2} name="tab1" value={0}>Carne</Tab>
						<Tab bind:group={tabSet2} name="tab2" value={1}>Peixe</Tab>
						<Tab bind:group={tabSet2} name="tab3" value={2}>Veg</Tab>
						<!-- Tab Panels --->
						<svelte:fragment slot="panel">
							{#if tabSet2 === 0}
								<h1>Bife</h1>
							{:else if tabSet2 === 1}
								<h1>Pescada</h1>
							{:else if tabSet2 === 2}
								<h1>Relva</h1>
							{/if}
						</svelte:fragment>
					</TabGroup>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead">3️⃣</svelte:fragment>
				<svelte:fragment slot="summary">Terça feira</svelte:fragment>
				<svelte:fragment slot="content">
					<TabGroup>
						<Tab bind:group={tabSet3} name="tab1" value={0}>Carne</Tab>
						<Tab bind:group={tabSet3} name="tab2" value={1}>Peixe</Tab>
						<Tab bind:group={tabSet3} name="tab3" value={2}>Veg</Tab>
						<!-- Tab Panels --->
						<svelte:fragment slot="panel">
							{#if tabSet3 === 0}
								<h1>Bife</h1>
							{:else if tabSet3 === 1}
								<h1>Pescada</h1>
							{:else if tabSet3 === 2}
								<h1>Relva aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
							{/if}
						</svelte:fragment>
					</TabGroup>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead">4️⃣</svelte:fragment>
				<svelte:fragment slot="summary">Quarta feira</svelte:fragment>
				<svelte:fragment slot="content">
					<TabGroup>
						<Tab bind:group={tabSet4} name="tab1" value={0}>Carne</Tab>
						<Tab bind:group={tabSet4} name="tab2" value={1}>Peixe</Tab>
						<Tab bind:group={tabSet4} name="tab3" value={2}>Veg</Tab>
						<!-- Tab Panels --->
						<svelte:fragment slot="panel">
							{#if tabSet4 === 0}
								<h1>Bife</h1>
							{:else if tabSet4 === 1}
								<h1>Pescada</h1>
							{:else if tabSet4 === 2}
								<h1>Relva</h1>
							{/if}
						</svelte:fragment>
					</TabGroup>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead">5️⃣ </svelte:fragment>
				<svelte:fragment slot="summary">Quinta feira</svelte:fragment>
				<svelte:fragment slot="content">
					<TabGroup>
						<Tab bind:group={tabSet5} name="tab1" value={0}>Carne</Tab>
						<Tab bind:group={tabSet5} name="tab2" value={1}>Peixe</Tab>
						<Tab bind:group={tabSet5} name="tab3" value={2}>Veg</Tab>
						<!-- Tab Panels --->
						<svelte:fragment slot="panel">
							{#if tabSet5 === 0}
								<h1>Bife</h1>
							{:else if tabSet5 === 1}
								<h1>Pescada</h1>
							{:else if tabSet5 === 2}
								<h1>Relva</h1>
							{/if}
						</svelte:fragment>
					</TabGroup>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead">6️⃣ </svelte:fragment>
				<svelte:fragment slot="summary">Sexta feira</svelte:fragment>
				<svelte:fragment slot="content">
					<TabGroup>
						<Tab bind:group={tabSet6} name="tab1" value={0}>Carne</Tab>
						<Tab bind:group={tabSet6} name="tab2" value={1}>Peixe</Tab>
						<Tab bind:group={tabSet6} name="tab3" value={2}>Veg</Tab>
						<!-- Tab Panels --->
						<svelte:fragment slot="panel">
							{#if tabSet6 === 0}
								<h1>Bife</h1>
							{:else if tabSet6 === 1}
								<h1>Pescada</h1>
							{:else if tabSet6 === 2}
								<h1>Relva</h1>
							{/if}
						</svelte:fragment>
					</TabGroup>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</div>
</div>