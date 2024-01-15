<template>
  <div class="header">
    <RouterLink to="/" class="header__logo">Posts</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: start;
  padding: 20px;
  background: var(--dark-bg);

  &__logo {
    color: var(--text);
    font-size: 20px;
    font-weight: 600;
  }
}
</style>
