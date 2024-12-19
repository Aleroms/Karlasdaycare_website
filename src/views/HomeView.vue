<script setup lang="ts">
import Banner from '@/components/Banner.vue'
// import ContactComponent from '@/components/contact/ContactComponent.vue'
import LocatedAt from '@/components/LocatedAt.vue'
import AboutUs from '@/components/about/AboutUs.vue'
import TestimonialTabs from '@/components/testimonials/TestimonialTabs.vue'
import ActivitiesSchedule from '@/components/activities/ActivitiesSchedule.vue'
import MealsInfo from '@/components/MealsInfo.vue'
import CallToAction from '@/components/CallToAction.vue'
// import CardComponent from '@/components/CardComponent.vue'

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
    <MealsInfo />
    <!-- <ContactComponent /> -->
    <CallToAction
      title="Ready to Learn More?"
      content="Contact us today to find out how Karla's Children's Daycare can help nurture and prepare your little one for a bright future."
      label="Contact Us"
      link="/contact"
    />
  </main>
</template>
