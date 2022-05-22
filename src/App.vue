<template>
  <search />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import search from './components/search.vue'

export default defineComponent({
  name: 'App',
  components: {
    search
  }
})
</script>

<style lang="scss">
html, body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 5%;
  user-select: none;
  background-color: rgb(244, 244, 244);
  min-height: 100%;
  padding-bottom: 20px;
}
</style>
