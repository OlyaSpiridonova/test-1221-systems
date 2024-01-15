<template>
  <BaseCard v-if="post && userInfo" :data="post" :user-data="userInfo" fullWidth="true" />
  <BaseLoader v-else />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { Post, User } from '@/types/types'
import BaseCard from '@/components/UI/BaseCard.vue'
import BaseLoader from '@/components/UI/BaseLoader.vue'

const route = useRoute()
const isLoading = ref(true)
const post = ref<Post | null>(null)
const userInfo = ref<User | null>(null)

onMounted(async () => {
  try {
    const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    post.value = await resPost.json()

    const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.value?.userId}`)
    userInfo.value = await resUser.json()
  } catch (error) {
    throw error
  } finally {
    isLoading.value = false
  }
})
</script>

<style lang="scss" scoped></style>
