<template>
  <div class="carousel" ref="carousel">
    <div class="carousel-slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div
        class="carousel-slide"
        v-for="(image, index) in images"
        :key="index"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array as () => string[],
    required: true,
  },
  interval: {
    type: Number,
    default: 3000, // Slide change interval in milliseconds
  },
})

const currentIndex = ref(0)
const carousel = ref<HTMLDivElement | null>(null)
let slideInterval: number | null = null

// Automatically cycle through slides
const startSlideShow = () => {
  slideInterval = window.setInterval(() => {
    currentIndex.value = currentIndex.value === props.images.length - 1 ? 0 : currentIndex.value + 1
  }, props.interval)
}

// Clean up the interval on unmount
onMounted(() => {
  startSlideShow()
})

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval)
})
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-slides {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
</style>
