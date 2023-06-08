<script>
    export let restaurantes = [];
</script>

<nav class="list-nav">
    {#each restaurantes as rest}
        <ul>
            <li>
                <a href="/{rest.shortName}">
                    <span class="">🍽</span>
                    <span class="flex-auto">{rest.name}</span>
                </a>
            </li>
        </ul>
    {/each}
</nav>