<template>
  <div class="testimonials-tabs">
    <h2>Testimonials</h2>
    <p>
      Don’t just take our word for it—hear from the families who have entrusted us with their
      child’s care! Visit the contact page to read testimonials from parents about their experiences
      with Karla's Children's Daycare.
    </p>
    <!-- Tabs Navigation -->
    <div class="tabs-nav">
      <!-- <button
        v-for="(testimonial, index) in testimonials"
        :key="index"
        :class="{ active: index === activeTab }"
        @click="activeTab = index"
      > -->
      <button
        v-for="(testimonial, index) in testimonials"
        :key="index"
        :class="changeTabColor(index)"
        @click="activeTab = index"
      >
        {{ testimonial.name }}
      </button>
    </div>

    <!-- Active Testimonial Content -->
    <div class="tab-content">
      <TestimonialItem
        :name="testimonials[activeTab].name"
        :review="testimonials[activeTab].review"
        :address="testimonials[activeTab].address"
        :email="testimonials[activeTab].email"
        :date="testimonials[activeTab].date"
        :phone="testimonials[activeTab].phone"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TestimonialItem from '@/components/testimonials/TestimonialItem.vue'
import TESTIMONIALS from '@/assets/data/testimonials.json'
const testimonials = TESTIMONIALS

// Reactive variable for active tab index
const activeTab = ref(0)

function changeTabColor(index: number) {
  if (index === activeTab.value) {
    switch (index) {
      case 0:
        return 'active1'
      case 1:
        return 'active2'
      case 2:
        return 'active3'
      case 3:
        return 'active4'
    }
  }
  return ''
}
</script>

<style scoped>
.testimonials-tabs {
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 1rem;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

p {
  margin: 2rem 0.625rem;
}

.tabs-nav {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.tabs-nav button {
  background-color: #f1f1f1;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.tabs-nav button.active1 {
  background-color: #007bff;
  color: white;
  font-weight: bold;
}

.tabs-nav button.active2 {
  background-color: #28a745;
  color: #ffffff;
  font-weight: bold;
}

.tabs-nav button.active3 {
  background-color: #ffc107;
  color: #000000;
  font-weight: bold;
}

.tabs-nav button.active4 {
  background-color: #dc3545;
  color: #ffffff;
  font-weight: bold;
}

.tabs-nav button:hover {
  background-color: #ddd;
}

.tab-content {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  background-color: #fff;
}
@media (min-width: 600px) {
  .tab-content {
    min-height: 350px;
  }
}
</style>
