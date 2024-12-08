<template>
  <div class="locatedAt-wrapper">
    <div class="locatedAt">
      <h2>Located At</h2>
      <p>We are located in Lake Forest</p>
      <img src="/googlemaps/lakeForest.png" alt="lake forest" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.locatedAt-wrapper {
  width: clamp(300px, 100%, 1200px);
  margin: 1rem auto;
}
.locatedAt {
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 40px;
  }

  img {
    width: clamp(100px, 100%, 400px);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
}
@media (min-width: 600px) {
  .locatedAt {
    padding: 3rem 3rem 16rem;
  }
}
</style>
