<template>
  <div class="posts">
    <span class="posts__header">List of posts</span>
    <div v-if="posts && !isLoading" class="posts__block">
      <BaseCard
        v-for="post in posts"
        :data="post"
        :key="post"
        @click="openPost(post.id)"
        @contextmenu.prevent="deletePost(post.id)"
      />
    </div>
    <BaseLoader v-else />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { Post } from '../types/types'

import BaseCard from '../components/UI/BaseCard.vue'
import BaseLoader from '@/components/UI/BaseLoader.vue'

const router = useRouter()
const posts = ref<Post[]>([])
const isLoading = ref(true)

function openPost(id: number) {
  router.push(`/posts/${id}`)
}

function deletePost(id: number) {
  posts.value = posts.value.filter((post) => post.id !== id)
}

onMounted(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value = await res.json()
  } catch (error) {
    throw error
  } finally {
    isLoading.value = false
  }
})
</script>

<style scoped lang="scss">
.posts {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text);
    font-size: 24px;
    font-weight: 600;
  }

  &__block {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
