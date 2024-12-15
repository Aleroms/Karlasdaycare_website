<template>
  <div class="contact-container">
    <div class="contact">
      <h2>Contact</h2>
      <p>
        Get in touch with Karla's Children's Daycare today! Whether you have questions about our
        services, want to schedule a visit, or are ready to enroll your child, we’re here to help.
        Our contact page includes everything you need, from our licensing information and payment
        options to heartwarming testimonials from families who trust us with their little ones.
      </p>
    </div>
    <div class="contact-info">
      <ContactInformation flex-direction="column" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactInformation from './ContactInformation.vue'
</script>

<style scoped lang="scss">
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.contact {
  height: 100%;
  box-sizing: border-box;
  padding: 3rem 1.6rem;
  line-height: 1.6rem;
  background-color: #444;
  color: white;

  h2 {
    font-size: 40px;
    margin-bottom: 1rem;
  }
}
.contact-info {
  width: 100%;
  padding: 3rem 0;
  background-color: lavender;
}
@media (min-width: 600px) {
  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: lavender;
  }
  .contact-info {
    width: clamp(300px, 100%, 800px);
    height: 100%;
    padding: 1.625em 3rem;
    box-sizing: border-box;
  }
  .contact p {
    max-width: 70ch; /* Limits the width to approximately 50 characters */
  }
}
</style>
