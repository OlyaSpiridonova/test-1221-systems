<template>
  <div class="card" :class="{ fullWidth: props.fullWidth }">
    <div class="card__info">
      <span class="card__id">№ {{ props.data.id }}</span>
      <span class="card__userId">User: {{ props.data.userId }}</span>
    </div>
    <span class="card__title">Title: {{ props.data.title }}</span>
    <span class="card__descr">Description: {{ props.data.body }}</span>
    <div v-if="props.userData" class="card__userInfo">
      <span class="card__userInfo-title">About the author</span>
      <span class="card__userInfo-name">Name: {{ props.userData.name }}</span>
      <a class="card__userInfo-email" :href="`mailto:${props.userData.email}`"
        >Email: {{ props.userData.email }}</a
      >
      <a class="card__userInfo-phone" :href="`tel:${props.userData.phone}`" target="_blank"
        >Phone: {{ props.userData.phone }}</a
      >
      <a class="card__userInfo-website" :href="props.userData.website" target="_blank"
        >Website: {{ props.userData.website }}</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Post, User } from '@/types/types'

interface PropsCard {
  data: Post
  userData?: User
  fullWidth?: Boolean
}

const props = defineProps<PropsCard>()
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 400px;
  border-radius: 12px;
  background: var(--dark-bg);
  padding: 15px;
  cursor: pointer;
  color: #fff;

  &__info {
    display: flex;
    justify-content: space-between;
    color: var(--text);
    font-weight: 600;
  }

  &__userInfo {
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 12px;
    border: 2px solid #e9e9e9;
    padding: 20px;
    color: var(--text);
    font-weight: 600;

    a {
      color: var(--text);
    }

    a:hover {
      color: var(--text-dark);
    }

    &-title {
      text-align: center;
      color: #fff;
      font-weight: 700;
      font-size: 18px;
    }
  }
}

.fullWidth {
  width: 100%;
}
</style>
