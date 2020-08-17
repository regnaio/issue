<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style>
  #layout-container {
    display: grid;
    grid-template-rows: minmax(0, 1fr) minmax(0, 10fr) minmax(0, 1fr);
    /* causes weird overflow bug */
    /* grid-template-rows: 1fr 10fr 1fr; */
  }

  #layout-header-container {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }

  #layout-footer-container {
    grid-column: 1 / -1;
    grid-row: 3 / -1;
  }
</style>

<div id="layout-container" class="grid-item">
  <div id="layout-header-container" class="grid-item">
    <Header />
  </div>
  <slot />
  <div id="layout-footer-container" class="grid-item">
    <Footer />
  </div>
</div>
