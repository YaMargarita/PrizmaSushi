<template>
  <div id="app">
    <vMainWrapper></vMainWrapper>
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper'

export default {
  name: 'App',
  components: {
    vMainWrapper,
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
