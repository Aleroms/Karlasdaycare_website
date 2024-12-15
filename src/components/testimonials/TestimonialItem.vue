<template>
  <div class="testimonial-item">
    <h3 class="name">{{ name }}</h3>
    <p class="review">
      <span v-for="(line, index) in review" :key="index"> {{ line }}<br /> </span>
    </p>
    <div v-if="address" class="address">Address: {{ address }}</div>
    <div v-if="email" class="email">Email: {{ email }}</div>
    <div v-if="date" class="date">Date: {{ date }}</div>
    <div v-if="phone" class="phone">Phone: {{ phone }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  review: {
    type: Array,
    required: true,
  },
  address: {
    type: String,
    required: false,
    default: '',
  },
  email: {
    type: String,
    required: false,
    default: '',
  },
  date: {
    type: String,
    required: false,
    default: '',
  },
  phone: {
    type: String,
    required: false,
    default: '',
  },
})
</script>

<style scoped>
.testimonial-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
}

.name {
  font-size: 1.5rem;
  font-weight: bold;
}

.review {
  margin: 0.5rem 0;
  font-style: italic;
}

.address,
.email,
.date,
.phone {
  margin-top: 0.5rem;
  color: #555;
}
</style>
