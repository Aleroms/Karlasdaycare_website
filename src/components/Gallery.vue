<template>
  <div class="gallery-page">
    <h2>Our Gallery</h2>
    <p>Take a look at some of the special moments and activities at Karla's Children's Daycare.</p>
    <div class="gallery-grid">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="gallery-item"
        @click="openModal(image)"
      >
        <img :src="image.src" :alt="image.alt" loading="lazy"/>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="selectedImage" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <img :src="selectedImage.src" :alt="selectedImage.alt" />
        <p>{{ selectedImage.alt }}</p>
        <button class="close-button" @click="closeModal">&times;</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GALLERY from '@/assets/data/gallery.json'

// Define an interface for the image objects
interface Image {
  src: string // Path to the image
  alt: string // Description of the image
}

const images: Image[] = GALLERY

// Reactive state for the modal
const selectedImage = ref<Image | null>(null)

// Function to open the modal
const openModal = (image: Image) => {
  selectedImage.value = image
}

// Function to close the modal
const closeModal = () => {
  selectedImage.value = null
}
</script>

<style scoped>
.gallery-page {
  background-color: #f9f9f9; /* Light background for contrast */
  color: #333; /* Dark text */
  padding: 2rem;
  text-align: center;
  padding: 8rem 0;
}

h2 {
  font-size: 2.5rem;
  color: #444;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1600px;
  margin: 0 auto;
}

.gallery-item {
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;
  padding: 1rem;
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
}

.gallery-item:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

/* Modal Styling */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Dark overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  max-width: 50%;
  max-height: 50%;
  text-align: center;
  position: relative;
}

.modal-content img {
  width: 300px;
  height:400px;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.modal-content p {
  font-size: 1rem;
  color: #333;
}

.close-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
}

.close-button:hover {
  color: #f00;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .modal-content {
    max-width: 95%;
    max-height: 85%;
  }
}
</style>
