<script setup lang="ts">
import Navbar from './components/navbar/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped></style>
