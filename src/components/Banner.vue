<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="banner" :style="{ backgroundImage: `url('/${imagePath}')` }">
    <div class="banner-content">
      <span class="highlight">
        <div class="title">{{ title }}</div>
        <div class="subtitle">{{ subtitle }}</div>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false, // Subtitle is optional
    default: '',
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
  text-align: center; /* Centers text alignment */
  z-index: 1; /* Ensures content is above the background */
  background-color: white;
  padding: 1rem 2rem; /* Adds spacing inside the box */
  border-radius: 8px; /* Slightly rounds the corners */
}

.highlight {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Adds a shadow for emphasis */
  color: #333; /* Dark text for contrast */
  animation: attention 1s ease-out; /* Adds an attention-grabbing animation */
}

.title {
  font-size: 2.5rem; /* Increases font size for the title */
  font-weight: bold;
  margin-bottom: 0.5rem; /* Adds spacing below the title */
}

.subtitle {
  font-size: 1.5rem; /* Font size for the subtitle */
  color: #555; /* Slightly lighter color for subtitle */
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

  .title {
    font-size: 1.8rem; /* Adjust title size for smaller screens */
  }

  .subtitle {
    font-size: 1.2rem; /* Adjust subtitle size for smaller screens */
  }
}
</style>
