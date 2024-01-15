<template>
  <router-link v-if="link" :to="to" :class="props.mode" class-active="active">
    <slot></slot>
  </router-link>
  <button v-else :class="props.mode">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps({
  mode: {
    type: String,
    required: false,
    default: null
  },
  link: {
    type: Boolean,
    required: false,
    default: false
  },
  to: {
    type: String,
    required: false,
    default: '/'
  }
})
</script>

<style scoped>
button,
a {
  display: inline-block;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: var(--dark-bg);
  color: var(--text);
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;

  @media (max-width: 779px) {
    padding: 0.5rem;
  }
}

a:hover,
a:active,
button:hover,
button:active {
  opacity: 0.7;
}

.router-link-exact-active {
  background-color: #268ad9;
  color: #ecf5f9;
}
</style>
