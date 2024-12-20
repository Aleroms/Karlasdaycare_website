<template>
  <div class="about-container">
    <div class="about-item">
      <article class="about-us">
        <h2>About Us</h2>
        <p>
          Welcome to Karla's Children's Daycare, where your child’s growth, happiness, and safety
          are our top priorities! With over 30 years of experience, we provide a nurturing,
          bilingual environment that fosters learning through play, exploration, and creativity.
          From wholesome meals prepared fresh daily to engaging educational activities, we’re
          dedicated to helping children from infancy to kindergarten thrive. Ready to give your
          little one the best start? Click below to learn more about our loving, family-focused
          care!
        </p>
        <RoundedButton to="/about" class="btn">View More</RoundedButton>
      </article>
    </div>
    <div class="about-item">
      <ImageCarousel :images="images" :interval="5000" />
    </div>
  </div>
</template>

<script setup lang="ts">
import RoundedButton from '../buttons/RoundedButton.vue'
import ImageCarousel from '../ImageCarousel.vue'

const images = [
  '/other/mats.jpg',
  '/activities/educational.jpg',
  '/banner/home2.jpg',
  '/banner/home1.jpg',
]
</script>

<style scoped>
.btn {
  margin: 10px auto;
}
.about-container {
  display: grid;
  grid-template-rows: 1fr 1fr;
  background: radial-gradient(circle at bottom left, #397A8E, #1A465F);
  color: white;
  margin: 1rem;
}
.about-us {
  margin: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  line-height: 1.7rem;
  gap: 1rem;

  h2 {
    font-size: 40px;
  }
  p {
    max-width: 70ch;
  }
}
@media (min-width: 600px) {
  .about-container {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: none;
  }
  .about-us {
    margin: 3rem auto;
    width: clamp(300px, 50%, 900px);
  }
}
</style>
