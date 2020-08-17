<script lang="ts">
  import Skybox from "./../components/Skybox.svelte";
</script>

<style>
  #home-grid-container {
    width: 100%;
    height: 100%;

    grid-column: 1 / -1;
    grid-row: 2 / 3;

    /* display: grid; */
    /* grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: minmax(0, 1fr); */
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
/* 
    justify-items: center;
    align-items: center; */

    border: var(--border);
  }

  #customization-container {
    grid-column: 1 / 3;
    grid-row: 1 / 3;

    border: var(--border);
  }

  #avatar-container {
    grid-column: 3 / -1;
    grid-row: 1 / 3;

    border: var(--border);
  }
</style>


<!-- <Skybox /> -->
<div class="grid-container" id="home-grid-container">
  <Skybox />
</div>
