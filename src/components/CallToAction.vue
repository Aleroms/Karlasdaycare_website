<template>
  <section class="cta">
    <h2>{{ title }}</h2>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Title',
  },
  content: {
    type: String,
    default: 'Content text asdf',
  },
})
</script>

<style scoped></style>
