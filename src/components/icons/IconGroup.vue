<template>
  <div class="icon-group">
    <component
      v-for="(iconName, index) in iconNames"
      :key="index"
      :is="iconComponents[iconName.toLowerCase()]"
      class="icon-wrapper"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

// Import the individual icon components
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconWhatsapp from '@/components/icons/IconWhatsapp.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'

// Define props
defineProps<{
  iconNames: string[]
}>()

// Map of available components
const iconComponents: Record<string, unknown> = {
  facebook: IconFacebook,
  whatsapp: IconWhatsapp,
  instagram: IconInstagram,
}
</script>

<style scoped>
.icon-group {
  display: flex;
  gap: 1rem;
}

.icon-wrapper {
  width: 21px;
  height: 24px;
}
</style>
