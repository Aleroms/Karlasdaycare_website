<template>
  <div class="call-to-action">
    <div class="cta-content">
      <h2>{{ title }}</h2>
      <p>
        {{ content }}
      </p>
      <RoundedButton :to="link">{{ label }}</RoundedButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import RoundedButton from '@/components/buttons/RoundedButton.vue'

defineProps({
  title: {
    type: String,
    default: 'title',
  },
  content: {
    type: String,
    default: 'content',
  },
  label: {
    type: String,
    default: 'label',
  },
  link: {
    type: String,
    default: '/',
  },
})
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
