<template>
  <div class="about-container">
    <div class="about-item">
      <article class="about-us">
        <h2>About Us</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, earum, magni, maxime
          debitis officiis dignissimos dolorem odit cumque velit veniam rerum pariatur perspiciatis
          in ipsa dolore voluptates enim similique dicta doloribus. Maxime eligendi ipsam
          reprehenderit labore, itaque voluptates eos, at iusto atque dolor officia repudiandae
          corrupti fuga dicta. Eum, architecto? Dicta, magni blanditiis voluptas quos laboriosam eos
          voluptates nostrum sunt officiis amet ut. Quis corrupti distinctio quam itaque ut magnam
          accusantium minima, ea nostrum tempore cupiditate, quas sunt quae facilis?
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

const images = ['/banner/home.jpg', '/banner/home.jpg', '/banner/home.jpg', '/banner/home.jpg']
</script>

<style scoped>
.btn {
  margin: 10px auto;
}
.about-container {
  display: grid;
  grid-template-rows: 1fr 1fr;
  background-color: #444;
  color: white;
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
