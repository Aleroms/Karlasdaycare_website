<template>
  <RouterLink :to="to" class="rounded-button" :class="colorClass">
    <slot></slot>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
  color: {
    type: String,
    default: 'primary', // primary, secondary, success, danger, etc.
    validator: (value: string) =>
      ['primary', 'secondary', 'success', 'danger', 'warning'].includes(value),
  },
})

const colorClass = computed(() => `bg-${props.color}`)
</script>

<style scoped>
.rounded-button {
  display: inline-block;
  padding: 0.5rem 1rem; /* Space around the text */
  font-size: 1rem;
  font-weight: bold;
  border-radius: 9999px; /* Fully rounded corners */
  text-align: center;
  text-decoration: none;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  width: 200px;
  white-space: nowrap; /* Prevent wrapping of text */
}

.rounded-button:hover {
  transform: scale(1.05);
  filter: brightness(0.9);
}

.bg-primary {
  background-color: #007bff;
  color: #ffffff;
}

.bg-secondary {
  background-color: #6c757d;
  color: #ffffff;
}

.bg-success {
  background-color: #28a745;
  color: #ffffff;
}

.bg-danger {
  background-color: #dc3545;
  color: #ffffff;
}

.bg-warning {
  background-color: #ffc107;
  color: #000000;
}
</style>
