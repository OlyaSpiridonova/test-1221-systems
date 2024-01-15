<template>
  <BaseHeader />
  <RouterView />
</template>

<script setup lang="ts">
import BaseHeader from './components/BaseHeader.vue'
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: none;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  list-style-type: none;

  --dark-bg: #7bbdf7bd;
  --light-bg: #c4e7f7ab;
  --text: #17639f;
  --text-dark: #0d3d7b;
}
</style>
