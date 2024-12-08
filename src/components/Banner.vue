<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="banner" :style="{ backgroundImage: `url('/${imagePath}')` }">
    <div class="banner-content">
      <span class="highlight">{{ content }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  content: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.banner {
  height: 600px;
  background-size: cover; /* Ensures the image covers the element */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  background-attachment: fixed; /* Creates the parallax effect */
  display: flex; /* Enables flexbox for centering */
  align-items: center; /* Vertically centers the content */
  justify-content: center; /* Horizontally centers the content */
  position: relative;
  overflow: hidden; /* Prevents content overflow */
}

.banner-content {
  font-size: 2rem;
  font-weight: bold;
  text-align: center; /* Centers text alignment */
  padding: 1rem;
  z-index: 1; /* Ensures content is above the background */
}

.highlight {
  background-color: white; /* Adds a white background */
  padding: 0.5rem 1rem; /* Adds spacing inside the box */
  border-radius: 8px; /* Slightly rounds the corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Adds a shadow for emphasis */
  font-size: 2.5rem; /* Increases font size for emphasis */
  color: #333; /* Dark text for contrast */
  animation: attention 1s ease-out; /* Adds an attention-grabbing animation */
}

@keyframes attention {
  0% {
    transform: scale(0.9);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .banner {
    background-attachment: scroll; /* Fallback for mobile */
  }

  .highlight {
    font-size: 1.5rem; /* Adjust text size for smaller screens */
  }
}
</style>
