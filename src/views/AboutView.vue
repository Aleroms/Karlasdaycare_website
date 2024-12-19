<script setup lang="ts">
import AboutMe from '@/components/about/AboutMe.vue'
import AboutCards from '@/components/about/AboutCards.vue'
import CallToAction from '@/components/CallToAction.vue'
</script>

<template>
  <div class="about">
    <AboutMe />
    <AboutCards />
    <CallToAction
      title="Join Our Family"
      content="At Karla's Children's Daycare, we’re more than a daycare—we’re a home away from home where your child will feel loved, encouraged, and inspired every day. Let us partner with you in nurturing your child’s potential. Ready to enroll or have more questions?"
      label="Contact us today!"
      link="/contact"
    />
  </div>
</template>

<style></style>
