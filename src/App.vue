<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import BackToTopButton from '@/components/buttons/BackToTopButton.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
  <BackToTopButton />
  <Footer />
</template>

<style scoped></style>
