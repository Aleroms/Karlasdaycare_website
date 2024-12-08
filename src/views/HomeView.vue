<script setup lang="ts">
import Banner from '@/components/Banner.vue'
import ContactComponent from '@/components/contact/ContactComponent.vue'
import LocatedAt from '@/components/LocatedAt.vue'
import AboutUs from '@/components/AboutUs.vue'
</script>

<template>
  <main>
    <Banner content="Karla's Children's Daycare" image-path="banner/home.jpg" />
    <AboutUs />
    <LocatedAt />
    <ContactComponent />
  </main>
</template>
