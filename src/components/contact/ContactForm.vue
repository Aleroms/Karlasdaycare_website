<template>
  <div class="contact-form">
    <h2>Contact Us</h2>
    <IconGroup :icon-names="iconList" />
    <p>
      Have questions or want to learn more? Please send an email to
      <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>
    </p>
  </div>
</template>

<script setup lang="ts">
import IconGroup from '@/components/icons/IconGroup.vue'
const contactEmail = 'osito92630@gmail.com'
const iconList = ['facebook', 'instagram', 'whatsapp', 'yelp']
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 600px;
  margin: 6rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 1rem;
}

p {
  text-align: center;
  color: #555;
  margin-bottom: 2rem;
}
</style>
