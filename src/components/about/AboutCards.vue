<template>
  <div>
    <CardComponent
      v-for="section in sections"
      :key="section.title"
      :title="section.title"
      :content="section.content"
    />
  </div>
</template>

<script setup lang="ts">
import CardComponent from '@/components/CardComponent.vue'
import ABOUT from '@/assets/data/aboutCards.json'
const sections = ABOUT.sections
</script>

<style scoped></style>
