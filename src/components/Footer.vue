<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Copyright from './Copyright.vue'
import ContactInformation from './contact/ContactInformation.vue'
</script>

<template>
  <footer class="footer">
    <!-- Top Section -->
    <div class="top">
      <p>Karla's Children's Daycare</p>
    </div>
    <!-- Bottom Section -->
    <ContactInformation />
  </footer>
  <Copyright />
</template>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 2rem 4rem;
}

.top {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

/* Responsive Styling */
@media (min-width: 600px) {
  .top {
    text-align: left;
    font-size: 30px;
  }
}
</style>
