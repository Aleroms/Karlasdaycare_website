<template>
  <div class="call-to-action">
    <div class="cta-content">
      <h2>Ready to Learn More?</h2>
      <p>
        Contact us today to find out how Karla's Children's Daycare can help nurture and prepare
        your little one for a bright future.
      </p>
      <RoundedButton to="/contact">Contact Us</RoundedButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import RoundedButton from '../buttons/RoundedButton.vue'
</script>

<style scoped>
.call-to-action {
  padding: 8rem 1rem;
  text-align: center;
  margin: 2rem 0;
  /* width: 100%; */
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
</style>
