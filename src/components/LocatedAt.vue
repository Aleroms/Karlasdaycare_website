<template>
  <div class="locatedAt-wrapper">
    <div class="locatedAt">
      <h2>Located At</h2>
      <p>We are located at <a :href="url">21391 arborwood</a>, Lake Forest</p>
      <img src="/googlemaps/address.png" alt="lake forest" />
      <ExternalLinkButton :href="url">Get Directions</ExternalLinkButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExternalLinkButton from './buttons/ExternalLinkButton.vue'
const url =
  'https://www.google.com/maps/place/21391+Arborwood,+Lake+Forest,+CA+92630/@33.6522883,-117.6867236,19z/data=!4m6!3m5!1s0x80dce9cbb3f98ca5:0xa79cad20679b143a!8m2!3d33.6523462!4d-117.6864035!16s%2Fg%2F11cp7vty5l?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D'
</script>

<style scoped>
.locatedAt-wrapper {
  width: clamp(300px, 100%, 1200px);
  margin: 1rem auto;
}
.locatedAt {
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 40px;
  }

  img {
    width: clamp(100px, 100%, 400px);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
}
@media (min-width: 600px) {
  .locatedAt {
    padding: 3rem 3rem 16rem;
  }
}
</style>
