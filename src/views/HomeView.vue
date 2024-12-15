<script setup lang="ts">
import Banner from '@/components/Banner.vue'
// import ContactComponent from '@/components/contact/ContactComponent.vue'
import LocatedAt from '@/components/LocatedAt.vue'
import AboutUs from '@/components/about/AboutUs.vue'
import TestimonialTabs from '@/components/testimonials/TestimonialTabs.vue'
import ActivitiesSchedule from '@/components/activities/ActivitiesSchedule.vue'
import ContactCTA from '@/components/contact/ContactCTA.vue'

const title = "Karla's Children's Daycare"
const subtitle = 'Where Learning, Care, and Family meet'
const imagePath = 'banner/home.jpg'
</script>

<template>
  <main>
    <Banner :title="title" :subtitle="subtitle" :image-path="imagePath" />
    <AboutUs />
    <TestimonialTabs />
    <LocatedAt />
    <ActivitiesSchedule />
    <!-- <ContactComponent /> -->
    <ContactCTA />
  </main>
</template>
