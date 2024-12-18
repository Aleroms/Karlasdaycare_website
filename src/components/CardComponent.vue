<template>
  <div class="card-container" :style="{ backgroundColor: color }">
    <article class="card">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
    </article>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Title 😊',
  },
  content: {
    type: String,
    default:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium vitae neque natus blanditiis? Sunt deleniti a aperiam sapiente necessitatibus voluptates?',
  },
  color: {
    type: String,
    default: '#333',
  },
})
</script>

<style scoped lang="scss">
.card-container {
  color: white;
}
.card {
  padding: 2rem 1rem;
  max-width: 800px;
  margin: 0 auto;

  h2 {
    font-size: 20px;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.7rem;
  }
}
</style>
