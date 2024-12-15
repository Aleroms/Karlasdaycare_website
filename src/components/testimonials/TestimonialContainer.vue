<template>
  <div class="testimonials-container">
    <h2>Testimonials</h2>
    <p>
      Don’t just take our word for it—hear from the families who have entrusted us with their
      child’s care! Visit the contact page to read testimonials from parents about their experiences
      with Karla's Children's Daycare.
    </p>
    <TestimonialItem
      v-for="(testimonial, index) in TESTIMONIALS"
      :key="index"
      :name="testimonial.name"
      :review="testimonial.review"
      :address="testimonial.address"
      :email="testimonial.email"
      :date="testimonial.date"
      :phone="testimonial.phone"
    />
  </div>
</template>

<script setup lang="ts">
import TestimonialItem from '@/components/testimonials/TestimonialItem.vue'
import TESTIMONIALS from '@/assets/data/testimonials.json'
</script>

<style scoped>
.testimonials-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 3rem;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

p {
  margin: 1.625rem 0;
}
@media (max-width: 600px) {
  .testimonials-container {
    padding: 3rem 1.625rem;
  }
}
</style>
