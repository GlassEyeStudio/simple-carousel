<template>
  <div id="app">
    <h1>Simple carousel</h1>
    <simple-carousel />
  </div>
</template>

<script>
  import SimpleCarousel from "@/components/SimpleCarousel";
  export default {
    name: "App",
    components: { SimpleCarousel }
  };
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    text-align: center;
    margin-top: 60px;
  }
</style>
