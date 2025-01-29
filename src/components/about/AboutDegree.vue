<template>
  <div class="img-wrapper">
    <img
      :src="images.md"
      :srcset="`${images.sm} 350w, ${images.md} 768w, ${images.lg} 1200w`"
      sizes="(max-width: 480px) 75vw, (max-width: 768px) 50vw, 33vw"
      alt="Mira Coast College Degree"
    />
    <ExternalLinkButton href="https://www.parchment.com/u/award/575dc059724537bccd467dc18226c7ab"
      >View credentials</ExternalLinkButton
    >
  </div>
</template>

<script setup lang="ts">
import ExternalLinkButton from '../buttons/ExternalLinkButton.vue'

const images = {
  sm: 'https://www.parchment.com/u/award/575dc059724537bccd467dc18226c7ab/preview-sm.jpg',
  md: 'https://www.parchment.com/u/award/575dc059724537bccd467dc18226c7ab/preview-md.jpg',
  lg: 'https://www.parchment.com/u/award/575dc059724537bccd467dc18226c7ab/preview-lg.jpg',
}
</script>

<style scoped>
.img-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 6rem 0;
  gap: 3rem;
}

.img-wrapper img {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
