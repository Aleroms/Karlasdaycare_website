<template>
  <button class="btt-wrapper" :class="backToTop" @click="scrollToTop">
    <div class="btt-inner">
      <IconArrowUp />
    </div>
  </button>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import IconArrowUp from '../icons/IconArrowUp.vue'
const scrollLimit = 800
const backToTop = ref('')

function handleScroll() {
  backToTop.value = window.scrollY < scrollLimit ? 'hidden' : ''
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.btt-wrapper {
  height: 35px;
  width: 35px;
  background-color: var(--kd-blue);
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: white;
  border: none;
  position: fixed;
  bottom: 1.425rem;
  right: 1rem;
  z-index: 1;
  cursor: pointer;
  opacity: 1; /* Default visibility */
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
}

.btt-wrapper:hover {
  transform: scale(1.1); /* Slight scaling effect on hover */
  box-shadow: rgba(0, 0, 0, 0.5) 0px 8px 20px; /* More prominent shadow */
}

.btt-inner {
  padding: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.hidden {
  opacity: 0; /* Smooth fade-out effect */
  visibility: hidden; /* Prevent interaction when hidden */
  pointer-events: none; /* Disable clicks */
}

@media (min-width: 768px) {
  /* For medium-sized devices */
  .btt-wrapper {
    height: 60px; /* Increase size for better visibility */
    width: 60px;
    bottom: 2.5rem;
    right: 2.5rem;

  }
}

@media (min-width: 1024px) {
  /* For larger screens */
  .btt-wrapper {
    height: 70px; /* Even larger for better visibility */
    width: 70px;
    bottom: 3rem;
    right: 3rem;
  }
}

@media (max-width: 480px) {
  /* For small screens */
  .btt-wrapper {
    height: 40px; /* Reduce size for smaller screens */
    width: 40px;
    bottom: 1.5rem;
    right: 1.5rem;
  }
}
</style>
