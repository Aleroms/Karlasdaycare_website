<template>
  <Banner
    title="Karla's Children's Daycare"
    subtitle="we'd love to hear more from you"
    image-path="banner/home.jpg"
  />
  <InformationComponent />
  <TestimonialTabs />
  
  <ContactForm />
  <!-- <ContactComponent /> -->
</template>

<script setup lang="ts">
import Banner from '@/components/Banner.vue'
// import ContactComponent from '@/components/contact/ContactComponent.vue'
import ContactForm from '@/components/contact/ContactForm.vue'
import InformationComponent from '@/components/InformationComponent.vue'
import TestimonialTabs from '@/components/testimonials/TestimonialTabs.vue'
</script>

<style scoped></style>
