<template>
  <div
    class="contact-info-container"
    :style="{ flexDirection: isMobile ? mobileFlexDirection : flexDirection }"
  >
    <div class="f-item">
      <h4>Contact</h4>
      <hr />
      <IconGroup :icon-names="iconList" />
    </div>
    <div class="f-item">
      <h4>Schedule</h4>
      <hr />
      <p>Monday - Friday</p>
      <p>7:00 AM - 6:00 PM</p>
    </div>
    <div class="f-item">
      <h4>Address</h4>
      <hr />
      <p>21391 Arborwood, Lake Forest, CA 92630</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import IconGroup from '../icons/IconGroup.vue'

const iconList = ['facebook', 'instagram', 'whatsapp', 'yelp', 'tiktok']

defineProps({
  flexDirection: {
    type: String,
    default: 'row',
  },
  mobileFlexDirection: {
    type: String,
    default: 'column',
  },
})

const isMobile = ref(window.innerWidth <= 600)

function updateIsMobile() {
  isMobile.value = window.innerWidth <= 600
}

onMounted(() => {
  window.addEventListener('resize', updateIsMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile)
})
</script>

<style scoped>
.contact-info-container {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}
.f-item {
  text-align: center;
  width: 170px;
}

.f-item h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.f-item hr {
  border: none;
  height: 1px;
  background-color: #555;
  margin: 0.5rem 0;
}

.f-item p {
  margin: 0.2rem 0;
}

@media (min-width: 600px) {
  .f-item {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-self: start;
  }
  .f-item h4 {
    margin-bottom: 0;
  }
}
</style>
