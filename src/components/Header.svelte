<script>
  const routes = [
    {
      name: "Home",
      href: "."
    },
    {
      name: "Route1",
      href: "."
    },
    {
      name: "Route2",
      href: "."
    },
    {
      name: "Route3",
      href: "."
    }
  ];
</script>

<style>
  #header-container {
    width: 100%;
		height: 100%;
		
		background: rgba(0.1, 0.1, 0.1, 0.75);
  }

  .header-item {
    height: 100%;
  }

  a {
    font-size: min(3vw, 4vh);

    transition: var(--transition);
    -webkit-transition: var(--transition);
    -moz-transition: var(--transition);
    -ms-transition: var(--transition);
    -o-transition: var(--transition);
  }

  a:hover {
    font-size: min(4vw, 5vh);

    filter: var(--filter);
    -webkit-filter: var(--filter);
    -moz-filter: var(--filter);
    -ms-filter: var(--filter);
    -o-filter: var(--filter);
  }
</style>

<div class="flex-row-container" id="header-container">
  {#each routes as { name, href }}
    <div class="flex-column-container header-item">
      <a {href}>{name}</a>
    </div>
  {/each}
</div>
