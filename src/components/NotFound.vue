<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Oops! The page you are looking for does not exist.</p>
    <RoundedButton to="/" color="danger">Go Home</RoundedButton>
  </div>
</template>

<script setup lang="ts">
import RoundedButton from './buttons/RoundedButton.vue'
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-image: url('banner/blurry.jpg');
  background-position: center;
  background-size: cover;
  color: #fff; /* White text for contrast */
  text-align: center;
}

h1 {
  font-size: 6rem;
  margin-bottom: 1rem;
  color: white; /* Highlighted yellow for the 404 */
}

p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #ccc;
}

.home-link {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  font-size: 1.2rem;
  color: #333;
  background-color: #f1c40f;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.home-link:hover {
  background-color: #e1b807; /* Slightly darker yellow on hover */
}
</style>
