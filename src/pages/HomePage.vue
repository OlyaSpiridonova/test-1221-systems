<template>
  <div class="home">
    <div class="home__content">
      <router-view></router-view>
    </div>
    <div class="home__navbar">
      <BaseButton link to="/">Главная</BaseButton>
      <BaseButton link to="/posts">Страница списка постов</BaseButton>
      <BaseButton v-if="route.name === 'post-id'" class="router-link-exact-active"
        >Пост № {{ route.params.id }}
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import BaseButton from '../components/UI/BaseButton.vue'

const route = useRoute()
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: start;
  justify-content: center;
  justify-items: start;
  min-height: 100vh;
  background: var(--light-bg);

  &__content {
    padding: 20px;
    width: 100%;
  }

  &__navbar {
    display: grid;
    justify-self: center;
    gap: 16px;
    padding: 20px;
  }
}
</style>
