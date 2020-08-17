<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    const checkInterval = setInterval(async () => {
      if (typeof BABYLON !== 'undefined') {
        const { Skybox } = await import("./../ts/skybox/Skybox");
        new Skybox();
        clearInterval(checkInterval);
      }
    }, 100);
  });
</script>

<style>
  #skybox-canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    touch-action: none;
    filter: blur(10px) contrast(1.5) saturate(1.5);
  }
</style>

<canvas id="skybox-canvas" />
