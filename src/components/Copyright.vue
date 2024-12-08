<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="santiagosites">
    <p>
      Karla's Children's Childcare
      <IconCopyright />
      | Designed by
      <b><a href="https://santiagomorales.dev/">SantiagoSites</a></b>
    </p>
  </div>
</template>

<script setup lang="ts">
import IconCopyright from './icons/IconCopyright.vue'
</script>

<style scoped lang="scss">
.santiagosites {
  background-color: #222;
  color: white;
  padding: 1rem;

  a {
    text-decoration: none;
    color: white;
  }
}
</style>
